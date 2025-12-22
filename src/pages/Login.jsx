import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 text-white">
        {/* Brand */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold tracking-wide">
            Travel<span className="text-sky-400">X</span>
          </h1>
          <p className="text-sm opacity-80 mt-1">
            Sign in to continue your journey
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button className="w-full py-3 rounded-xl font-semibold text-white 
                             bg-gradient-to-r from-sky-500 to-indigo-500 
                             hover:scale-[1.02] transition shadow-lg">
            Login
          </button>
        </div>

        {/* Extra actions */}
        <div className="flex justify-between text-sm mt-4 opacity-80">
          <span className="cursor-pointer hover:underline">
            Forgot password?
          </span>
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer hover:underline"
          >
            Create account
          </span>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/30" />
          <span className="text-xs opacity-70">OR</span>
          <div className="flex-1 h-px bg-white/30" />
        </div>

        {/* Social login */}
        <div className="space-y-3">
          <button className="w-full py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-100 transition">
            Continue with Google
          </button>
          <button className="w-full py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-100 transition">
            Continue with Apple
          </button>
        </div>

        {/* Trust note */}
        <p className="text-xs text-center opacity-70 mt-6">
          🔒 Your data is safe. We never post without permission.
        </p>
      </div>
    </div>
  );
};

export default Login;
