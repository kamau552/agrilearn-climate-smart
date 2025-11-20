"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { FiMail, FiLock, FiUser, FiArrowRight } from "react-icons/fi";

export default function SignInPage() {
  const { login, loginAsGuest } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      login(email, password);
      router.push("/");
    } catch (e: unknown) {
        
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  function handleGuestLogin() {
    loginAsGuest();
    router.push("/");
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

          <form onSubmit={handleLogin} className="w-full">
            <h2 className="text-base font-semibold text-gray-900 text-center mb-1">Welcome Back</h2>
            <p className="text-[11px] text-gray-500 text-center mb-3">
              Sign in to continue
            </p>

            {error && (
              <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-[11px] text-center">
                {error}
              </div>
            )}

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
                placeholder="Password" 
                className="bg-transparent text-gray-700 placeholder-gray-500 outline-none text-[11px] w-full h-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="w-full flex items-center justify-between mb-3 text-gray-600">
              <div className="flex items-center gap-1">
                <input className="h-3 w-3 rounded border-gray-300" type="checkbox" id="remember" />
                <label className="text-[11px]" htmlFor="remember">Remember</label>
              </div>
              <Link href="#" className="text-[11px] text-green-600 hover:underline">
                Forgot?
              </Link>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-9 rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors disabled:opacity-50 font-medium flex items-center justify-center gap-1 mb-2 text-[12px]"
            >
              {loading ? "Signing In..." : "Sign In"}
              <FiArrowRight size={12} />
            </button>

            <div className="flex items-center gap-1 w-full my-3">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="text-nowrap text-[11px] text-gray-500">or</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Guest Login Button */}
            <button
              type="button"
              onClick={handleGuestLogin}
              className="w-full bg-green-50 hover:bg-green-100 border border-green-200 text-green-700 flex items-center justify-center h-9 rounded-full transition-colors font-medium mb-3 text-[12px]"
            >
              <FiUser className="mr-1" size={12} />
              Guest Access
            </button>

            {/* Sign Up Link */}
            <p className="text-gray-600 text-[11px] text-center">
              No account?{" "}
              <Link href="/signup" className="text-green-600 hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </form>

          {/* Help Text - Ultra Compact */}
          <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
            <p className="text-[11px] text-blue-800 font-medium">💡 Use Guest for quick access</p>
          </div>
        </div>
      </div>
    </div>
  );
}