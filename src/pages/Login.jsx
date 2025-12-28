import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FaGoogle, FaApple, FaGithub } from "react-icons/fa";

const Auth = () => {
  const [mode, setMode] = useState("login"); // login | signup

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl p-8 text-white">

        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Azure<span className="text-sky-400">Escape</span>
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            {mode === "login"
              ? "Sign in to manage your trips"
              : "Create an account to start exploring"}
          </p>
        </div>

        {/* Social Login */}
        <div className="space-y-3 mb-6">
          <button className="auth-social">
            <FaGoogle /> Continue with Google
          </button>
          <button className="auth-social">
            <FaApple /> Continue with Apple
          </button>
          <button className="auth-social">
            <FaGithub /> Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Form */}
        <div className="space-y-4">
          {mode === "signup" && (
            <div className="relative">
              <FiUser className="auth-icon" />
              <input className="auth-input" placeholder="Full name" />
            </div>
          )}

          <div className="relative">
            <FiMail className="auth-icon" />
            <input className="auth-input" placeholder="Email address" />
          </div>

          <div className="relative">
            <FiLock className="auth-icon" />
            <input type="password" className="auth-input" placeholder="Password" />
          </div>

          {/* Remember Me */}
          {mode === "login" && (
            <label className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" className="accent-sky-500" />
              Remember me
            </label>
          )}

          {/* Submit */}
          <button className="w-full py-3 rounded-lg font-semibold bg-sky-500 hover:bg-sky-600 transition">
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </div>

        {/* Guest Login */}
        {mode === "login" && (
          <button className="w-full mt-4 py-3 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition">
            Continue as Guest
          </button>
        )}

        {/* Switch */}
        <div className="mt-8 text-center text-sm text-gray-400">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-sky-400 hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-sky-400 hover:underline"
              >
                Sign in
              </button>
            </>
          )}
        </div>

        {/* Trust */}
        <p className="text-xs text-center text-gray-500 mt-6">
          🔒 Secure authentication. Your data stays private.
        </p>
      </div>
    </div>
  );
};

export default Auth;
