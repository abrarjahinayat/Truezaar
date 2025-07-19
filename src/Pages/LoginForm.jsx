import React, { useState, useEffect } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "/src/firebase.config";
import { useNavigate } from "react-router";
import { getDatabase, ref, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "/src/Redux/userslice";
import { getAuth, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider, browserLocalPersistence, setPersistence } from "firebase/auth";

export default function LoginForm() {
  const auth = getAuth();
  const db = getDatabase();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  
  let [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  });
  
  const [isMobile, setIsMobile] = useState(false);
  const [isGoogleLoginLoading, setIsGoogleLoginLoading] = useState(false);
  const [usePopupMethod, setUsePopupMethod] = useState(true);

  // Initialize Firebase Auth persistence and check for redirect results
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Set persistence to local storage
        await setPersistence(auth, browserLocalPersistence);
        
        const checkIfMobile = () => {
          const userAgent = navigator.userAgent.toLowerCase();
          const mobileKeywords = ['android', 'iphone', 'ipad', 'mobile', 'tablet'];
          const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword)) || window.innerWidth <= 768;
          
          // Also check if we're in a storage-partitioned environment
          const isStoragePartitioned = checkStoragePartitioning();
          
          return isMobileDevice || isStoragePartitioned;
        };
        
        const checkStoragePartitioning = () => {
          try {
            // Test if we can access and use sessionStorage
            const testKey = '__firebase_test__';
            sessionStorage.setItem(testKey, 'test');
            const testValue = sessionStorage.getItem(testKey);
            sessionStorage.removeItem(testKey);
            return testValue !== 'test';
          } catch (e) {
            // Storage is not accessible
            return true;
          }
        };
        
        const isMobileOrPartitioned = checkIfMobile();
        setIsMobile(isMobileOrPartitioned);
        
        // For mobile or storage-partitioned environments, prefer popup over redirect
        setUsePopupMethod(!isMobileOrPartitioned || window.location.protocol === 'https:');
        
        // Check for redirect result only if we might have used redirect
        if (!usePopupMethod) {
          try {
            const result = await getRedirectResult(auth);
            if (result) {
              const user = result.user;
              await handleGoogleUserData(user);
            }
          } catch (error) {
            console.error('Redirect result error:', error);
            if (error.code === 'auth/missing-initial-state') {
              toast.error('Authentication state was lost. Please try logging in again.');
            } else {
              toast.error('Google login failed. Please try again.');
            }
            setIsGoogleLoginLoading(false);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      }
    };

    initializeAuth();
  }, []);

  const handleGoogleUserData = async (user) => {
    try {
      await set(ref(db, "users/" + user.uid), {
        name: user.displayName,
        email: user.email,
      });
      navigate("/home2");
      dispatch(userLoginInfo(user));
      toast.success('Successfully logged in with Google!');
    } catch (error) {
      console.error('Error saving user data:', error);
      toast.error('Failed to save user data');
    } finally {
      setIsGoogleLoginLoading(false);
    }
  };

  let handleEmail = (e) => {
    setUserinfo((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  let handlePassword = (e) => {
    setUserinfo((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  let handlelogin = () => {
    if (!userinfo.email || !userinfo.password) {
      toast.error("All field are required");
    } else {
      signInWithEmailAndPassword(auth, userinfo.email, userinfo.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user.emailVerified) {
            console.log(user);
            dispatch(userLoginInfo(user));
            navigate("/home2");
          } else {
            toast(` Hey.. "${user.displayName}"  Please Verify your email `, {
              icon: "👋",
            });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Email or Password invalid");
          }
          setUserinfo({
            email: "",
            password: "",
          });
        });
    }
  };

  let handleGooglelogin = async () => {
    setIsGoogleLoginLoading(true);
    
    // Create new provider instance for each login attempt
    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    
    try {
      let result;
      
      if (usePopupMethod) {
        // Try popup method first (works better in most cases)
        try {
          result = await signInWithPopup(auth, provider);
          const user = result.user;
          await handleGoogleUserData(user);
        } catch (popupError) {
          console.error('Popup method failed:', popupError);
          
          if (popupError.code === 'auth/popup-blocked' || 
              popupError.code === 'auth/popup-closed-by-user') {
            // Fallback to redirect method
            toast('Popup blocked. Redirecting to Google sign-in...', {
              icon: '🔄',
            });
            
            // Small delay to show the message
            setTimeout(async () => {
              try {
                await signInWithRedirect(auth, provider);
              } catch (redirectError) {
                console.error('Redirect method also failed:', redirectError);
                setIsGoogleLoginLoading(false);
                toast.error('Unable to sign in with Google. Please try again or use email/password.');
              }
            }, 1000);
            return;
          } else {
            throw popupError;
          }
        }
      } else {
        // Use redirect method for mobile/problematic environments
        await signInWithRedirect(auth, provider);
        // Note: execution stops here as the page redirects
        return;
      }
    } catch (error) {
      console.error('Google login error:', error);
      setIsGoogleLoginLoading(false);
      
      // Handle specific error cases
      if (error.code === 'auth/network-request-failed') {
        toast.error('Network error. Please check your connection and try again.');
      } else if (error.code === 'auth/too-many-requests') {
        toast.error('Too many attempts. Please wait a moment and try again.');
      } else if (error.code === 'auth/operation-not-allowed') {
        toast.error('Google sign-in is not enabled. Please contact support.');
      } else if (error.code === 'auth/missing-initial-state') {
        toast.error('Authentication state error. Please clear your browser data and try again.');
      } else {
        toast.error('Google login failed. Please try again or use email/password.');
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
      `}</style>

      <div className="max-w-md w-full space-y-8">
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
        
        {/* Browser Compatibility Warning */}
        {typeof Storage === "undefined" && (
          <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md text-sm">
            Your browser doesn't support local storage. Google sign-in may not work properly.
          </div>
        )}
        
        {/* Logo */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Truezaar.com
            </span>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white py-8 px-6 shadow-lg rounded-xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-center text-2xl font-semibold text-gray-900">
                Log in
              </h2>
            </div>

            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    onChange={handleEmail}
                    value={userinfo.email}
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    onChange={handlePassword}
                    value={userinfo.password}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* Login Button */}
              <div>
                <button
                  onClick={handlelogin}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Log In
                </button>
              </div>

              {/* Forgot Password */}
              <div className="text-center">
                <button
                  onClick={() => console.log("Forgot password clicked")}
                  className="text-sm text-blue-600 hover:text-blue-500 bg-transparent border-none cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleGooglelogin}
                  disabled={isGoogleLoginLoading}
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                      {isGoogleLoginLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                      {!usePopupMethod ? 'Redirecting...' : 'Signing in...'}
                    </div>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Google
                    </>
                  )}
                </button>

                <button className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="#1877F2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <span className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to={"/signupform"}
              onClick={() => console.log("Sign up clicked")}
              className="font-medium text-blue-600 hover:text-blue-500 bg-transparent border-none cursor-pointer"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}