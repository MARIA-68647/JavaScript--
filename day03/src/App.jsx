import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("login"); // login | signup | forgot

  // login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // signup state
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // forgot password
  const [resetEmail, setResetEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Fill all fields");
    alert("Login Successful!");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !signupEmail || !signupPassword)
      return alert("Fill all fields");
    alert("Account Created!");
    setPage("login");
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (!resetEmail) return alert("Enter your email");
    alert("Password reset link sent!");
    setPage("login");
  };

  const Input = (props) => (
    <input
      {...props}
      className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-700/40 transition"
    />
  );

  const Card = ({ children }) => (
    <div className="bg-gray-900/90 border border-gray-800 rounded-3xl shadow-2xl w-full max-w-md p-8 backdrop-blur-md">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-4">

      {/* LOGIN */}
      {page === "login" && (
        <Card>
          <h1 className="text-4xl font-bold text-center text-white">
            Welcome Back
          </h1>

          <p className="text-center text-gray-400 mt-2">
            Login to your account
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">

            <div>
              <label className="text-gray-300">Email</label>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-300">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between text-sm">
              <button
                type="button"
                onClick={() => setPage("forgot")}
                className="text-indigo-400 hover:underline"
              >
                Forgot Password?
              </button>

              <button
                type="button"
                onClick={() => setPage("signup")}
                className="text-pink-500 hover:underline"
              >
                Sign Up
              </button>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700">
              Login
            </button>
          </form>
        </Card>
      )}

      {/* SIGNUP */}
      {page === "signup" && (
        <Card>
          <h1 className="text-3xl font-bold text-center text-white">
            Create Account
          </h1>

          <form onSubmit={handleSignup} className="mt-8 space-y-5">

            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />

            <button className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700">
              Sign Up
            </button>

            <p className="text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setPage("login")}
                className="text-indigo-400 hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        </Card>
      )}

      {/* FORGOT PASSWORD */}
      {page === "forgot" && (
        <Card>
          <h1 className="text-3xl font-bold text-center text-white">
            Reset Password
          </h1>

          <p className="text-center text-gray-400 mt-2 text-sm">
            Enter your email to receive reset link
          </p>

          <form onSubmit={handleReset} className="mt-8 space-y-5">

            <Input
              type="email"
              placeholder="Email address"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />

            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700">
              Send Reset Link
            </button>

            <p className="text-center text-sm">
              <button
                type="button"
                onClick={() => setPage("login")}
                className="text-indigo-400 hover:underline"
              >
                Back to Login
              </button>
            </p>
          </form>
        </Card>
      )}
    </div>
  );
}