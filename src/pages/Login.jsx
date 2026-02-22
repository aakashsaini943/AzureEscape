import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";

const Auth = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-3">
      <div className="w-full max-w-5xl">
        <div className="relative bg-slate-900 border border-white/10 rounded-xl
                        flex flex-col lg:flex-row overflow-hidden
                        shadow-xl shadow-sky-500/5">

          {/* Spine */}
          <div className="absolute inset-y-0 left-[55%] w-px bg-white/5 hidden lg:block" />

          {/* LEFT */}
          <div className="lg:w-[55%] bg-gradient-to-br from-sky-500/10 via-slate-900 to-slate-950
                          p-5 sm:p-6 lg:p-8 flex flex-col justify-center">

            <h1 className="text-2xl sm:text-3xl font-bold mb-3">
              Azure<span className="text-sky-400">Escape</span>
            </h1>

            <p className="text-gray-400 mb-4 text-xs sm:text-sm leading-relaxed">
              Plan journeys, manage adventures, and explore destinations
              with a beautifully crafted dashboard.
            </p>

            <div className="hidden lg:flex">
              <div className="w-full h-44 rounded-lg bg-slate-800/60 border border-white/10
                              flex items-center justify-center text-gray-500 text-xs">
                ✈️ Travel Illustration
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-[45%] p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
            <div className="w-full max-w-sm mx-auto">

              {/* Heading */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold">
                  {mode === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
                </h2>
                <p className="text-xs text-gray-400">
                  {mode === "login"
                    ? "Sign in to continue"
                    : "Start your journey"}
                </p>
              </div>

              {/* Social */}
              <div className="space-y-2 mb-4">
                <SocialButton icon={<FcGoogle />} label="Google" />
                <SocialButton icon={<FaApple />} label="Apple" />
                <SocialButton icon={<FaGithub />} label="GitHub" />
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[10px] text-gray-500">OR</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Form */}
              <div className="space-y-3">
                {mode === "signup" && (
                  <InputField icon={<FiUser />} placeholder="Full name" />
                )}

                <InputField icon={<FiMail />} placeholder="Email address" />
                <InputField
                  icon={<FiLock />}
                  placeholder="Password"
                  type="password"
                />

                {mode === "login" && (
                  <label className="flex items-center gap-2 text-xs text-gray-400">
                    <input type="checkbox" className="accent-sky-500 scale-90" />
                    Remember me
                  </label>
                )}

                <button className="w-full py-2.5 rounded-lg text-sm font-medium
                                   bg-sky-500 hover:bg-sky-600
                                   transition">
                  {mode === "login" ? "Sign In" : "Create Account"}
                </button>
              </div>

              {/* Guest */}
              {mode === "login" && (
                <button className="w-full mt-3 py-2.5 rounded-lg text-xs
                                   border border-white/10 text-gray-300
                                   hover:bg-white/5 transition">
                  Continue as Guest
                </button>
              )}

              {/* Switch */}
              <div className="mt-4 text-center text-xs text-gray-400">
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

              <p className="text-[10px] text-center text-gray-500 mt-4">
                🔒 Secure authentication
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Components */

const SocialButton = ({ icon, label }) => (
  <button className="w-full flex items-center justify-center gap-2 py-2.5
                     rounded-lg bg-slate-800 hover:bg-slate-700
                     border border-white/10 transition text-xs">
    <span className="text-sm">{icon}</span>
    Continue with {label}
  </button>
);

const InputField = ({ icon, placeholder, type = "text" }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
      {icon}
    </span>

    <input
      type={type}
      placeholder={placeholder}
      className="w-full py-2.5 pl-9 pr-3 rounded-lg text-xs
                 bg-slate-800/70 border border-white/10
                 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                 outline-none transition"
    />
  </div>
);

export default Auth;