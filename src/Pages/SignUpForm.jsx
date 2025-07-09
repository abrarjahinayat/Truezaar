import React, { useState } from 'react';
import { Mail, Lock, Check, X } from 'lucide-react';
import signup from '../assets/images/signup.png'
import { Link } from 'react-router';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    number: false,
    lowercase: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Password validation
    if (name === 'password') {
      setPasswordValidation({
        length: value.length >= 8,
        number: /\d/.test(value),
        lowercase: /[a-z]/.test(value)
      });
    }
  };

  const getPasswordStrength = () => {
    const { length, number, lowercase } = passwordValidation;
    const validCount = [length, number, lowercase].filter(Boolean).length;
    
    if (validCount === 0) return { text: '', color: '' };
    if (validCount === 1) return { text: 'Password strength: weak', color: 'text-red-500' };
    if (validCount === 2) return { text: 'Password strength: medium', color: 'text-yellow-500' };
    return { text: 'Password strength: strong', color: 'text-green-500' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-gray-50 flex" style={{ fontFamily: 'Inter, sans-serif' }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      {/* Left Side - Form */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Truezaar.com</span>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sign Up</h2>
            
            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* Password Validation */}
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center text-sm">
                    <div className={`w-2 h-2 rounded-full mr-3 ${passwordStrength.color === 'text-red-500' ? 'bg-red-500' : passwordStrength.color === 'text-yellow-500' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                    <span className="text-gray-700">
                      Password strength, weak
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className={`w-2 h-2 rounded-full mr-3 ${passwordValidation.length ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-gray-700">
                      At least 8 characters
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className={`w-2 h-2 rounded-full mr-3 ${passwordValidation.number ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-gray-700">
                      Contains a number or symbol
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <div className={`w-2 h-2 rounded-full mr-3 ${passwordValidation.lowercase ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-gray-700">
                      Contains uppercase and lowercase character
                    </span>
                  </div>
                </div>
              </div>

              {/* Create Account Button */}
              <div className="pt-2">
                <button
                  onClick={() => console.log('Create account clicked', formData)}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Create account
                </button>
              </div>

              {/* Forgot Password */}
              <div className="text-center">
                <button 
                  onClick={() => console.log('Forgot password clicked')}
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
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => console.log('Google signup clicked')}
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                
                <button
                  onClick={() => console.log('Facebook signup clicked')}
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <span className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to={'/loginform'}
                onClick={() => console.log('Log in clicked')}
                className="font-medium text-blue-600 hover:text-blue-500 bg-transparent border-none cursor-pointer"
              >
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Product Review Image Area */}
      <div className=" bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
        {/* Placeholder for your product review image */}
        <div className="max-h-screen max-w-4xl ">
        <img src={signup} alt="" />
        </div>
        
      
      </div>
    </div>
  );
}