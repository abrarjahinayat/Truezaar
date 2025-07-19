import React, { useState } from "react";
import { Mail, Lock, Check, X } from "lucide-react";
import signup from "../assets/images/signup.png";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { getDatabase, ref, set } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { app, auth } from "/src/firebase.config";
import { useNavigate } from "react-router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function SignUpForm() {
  let navigate = useNavigate();
  const db = getDatabase();

  const auth = getAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    number: false,
    lowercase: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Password validation
    if (name === "password") {
      setPasswordValidation({
        length: value.length >= 8,
        number: /\d/.test(value),
        lowercase: /[a-z]/.test(value),
      });
    }
  };

  let handlecreate = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("All field are required");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      toast.error("Email is invalid");
    } else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          toast.success("Signup successfully");
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            updateProfile(auth.currentUser, {
              displayName: formData.firstName,
            })
              .then(() => {
                const user = userCredential.user;
                console.log(user);
                set(ref(db, "users/" + user.uid), {
                  name: user.displayName,
                  email: user.email,
                })
                  .then(() => {
                    navigate("/loginform");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.includes("auth/email-already-in-use")) {
            toast.error("This Email already in use");
          }
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });
        });
    }
  };

  const getPasswordStrength = () => {
    const { length, number, lowercase } = passwordValidation;
    const validCount = [length, number, lowercase].filter(Boolean).length;

    if (validCount === 0) return { text: "", color: "" };
    if (validCount === 1)
      return { text: "Password strength: weak", color: "text-red-500" };
    if (validCount === 2)
      return { text: "Password strength: medium", color: "text-yellow-500" };
    return { text: "Password strength: strong", color: "text-green-500" };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col lg:flex-row"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Toaster />
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
      `}</style>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="mb-6 lg:mb-8">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Truezaar.com
              </span>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
              Sign Up
            </h2>

            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
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
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* Password Validation */}
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center text-xs sm:text-sm">
                    <div
                      className={`w-2 h-2 rounded-full mr-3 ${
                        passwordStrength.color === "text-red-500"
                          ? "bg-red-500"
                          : passwordStrength.color === "text-yellow-500"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    ></div>
                    <span className="text-gray-700">
                      Password strength, weak
                    </span>
                  </div>

                  <div className="flex items-center text-xs sm:text-sm">
                    <div
                      className={`w-2 h-2 rounded-full mr-3 ${
                        passwordValidation.length
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-gray-700">At least 8 characters</span>
                  </div>

                  <div className="flex items-center text-xs sm:text-sm">
                    <div
                      className={`w-2 h-2 rounded-full mr-3 ${
                        passwordValidation.number
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-gray-700">
                      Contains a number or symbol
                    </span>
                  </div>

                  <div className="flex items-center text-xs sm:text-sm">
                    <div
                      className={`w-2 h-2 rounded-full mr-3 ${
                        passwordValidation.lowercase
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-gray-700">
                      Contains uppercase and lowercase character
                    </span>
                  </div>
                </div>
              </div>

              {/* Create Account Button */}
              <div className="pt-2">
                <button
                  onClick={handlecreate}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Create account
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
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to={"/loginform"}
                onClick={() => console.log("Log in clicked")}
                className="font-medium text-blue-600 hover:text-blue-500 bg-transparent border-none cursor-pointer"
              >
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Product Review Image Area */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 items-center justify-center relative overflow-hidden">
        {/* Placeholder for your product review image */}
        <div className="max-h-screen max-w-4xl">
          <img src={signup} alt="Sign up illustration" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}