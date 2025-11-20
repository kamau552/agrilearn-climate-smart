"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { FiMail, FiLock, FiUser, FiArrowRight } from "react-icons/fi";

export default function SignUpPage() {
  const { signUp } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      signUp(email, password, name);
      router.push("/");
    } catch (e: unknown) {
      // Fix: Type guard for the error
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto">
        {/* Ultra Compact Card */}
        <div className="bg-white rounded-xl shadow-lg border border-green-100 p-5 sm:p-6">
          {/* AgriLearn Logo - Ultra Compact */}
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-2xl text-green-600">🌾</div>
              <h1 className="text-lg font-bold text-green-800">AgriLearn</h1>
            </div>
            <p className="text-green-600 text-[11px]">Smart Farming</p>
          </div>

          <form onSubmit={handleSignup} className="w-full">
            <h2 className="text-base font-semibold text-gray-900 text-center mb-1">Create Account</h2>
            <p className="text-[11px] text-gray-500 text-center mb-3">
              Sign up to get started
            </p>

            {error && (
              <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-[11px] text-center">
                {error}
              </div>
            )}

            {/* Name Input */}
            <div className="flex items-center w-full bg-white border border-gray-300 h-9 rounded-full overflow-hidden pl-3 gap-2 mb-2">
              <FiUser className="text-gray-500" size={12} />
              <input 
                type="text"
                placeholder="Full Name"
                className="bg-transparent text-gray-700 placeholder-gray-500 outline-none text-[11px] w-full h-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center w-full bg-white border border-gray-300 h-9 rounded-full overflow-hidden pl-3 gap-2 mb-2">
              <FiMail className="text-gray-500" size={12} />
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent text-gray-700 placeholder-gray-500 outline-none text-[11px] w-full h-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />                 
            </div>

            {/* Password Input */}
            <div className="flex items-center w-full bg-white border border-gray-300 h-9 rounded-full overflow-hidden pl-3 gap-2 mb-3">
              <FiLock className="text-gray-500" size={12} />
              <input 
                type="password" 
                placeholder="Password (min 4 chars)" 
                className="bg-transparent text-gray-700 placeholder-gray-500 outline-none text-[11px] w-full h-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={4}
                required
              />
            </div>

            {/* Create Account Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-9 rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors disabled:opacity-50 font-medium flex items-center justify-center gap-1 mb-2 text-[12px]"
            >
              {loading ? "Creating Account..." : "Create Account"}
              <FiArrowRight size={12} />
            </button>

            <div className="flex items-center gap-1 w-full my-3">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="text-nowrap text-[11px] text-gray-500">or</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Sign In Link */}
            <Link
              href="/signin"
              className=" w-full bg-green-50 hover:bg-green-100 border border-green-200 text-green-700 flex items-center justify-center h-9 rounded-full transition-colors font-medium mb-3 text-[12px]"
            >
              Already have an account?
            </Link>

            {/* Guest Access Link */}
            <p className="text-gray-600 text-[11px] text-center">
              Want quick access?{" "}
              <Link href="/signin" className="text-green-600 hover:underline font-medium">
                Continue as Guest
              </Link>
            </p>
          </form>

          {/* Help Text - Ultra Compact */}
          <div className="mt-3 p-2 bg-yellow-50 rounded border border-yellow-200">
            <p className="text-[11px] text-yellow-800 font-medium">🔒 Data stored locally on device</p>
          </div>
        </div>
      </div>
    </div>
  );
}