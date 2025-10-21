import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// importing image
import LoginImage from "/login.jpg";
// import from Components
import DynamicButton from "../Components/LoaderComponents/NormalLoaderComponents/DynamicButton";
import GoogleLoginButton from "../Components/LoaderComponents/NormalLoaderComponents/GoogleLoginButton";
import { useAuth } from "../Context/AuthProvider.jsx";
// import from sonner
import { toast } from "sonner";
// import from Hook
import useScrollToTop from "../Hooks/useScrollToTop";
import playSound from "../Hooks/playSound";

const Login = () => {
  useScrollToTop();
  const { emailPasswordSignIn, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const loginSound = "/Sound/login.mp3";
  const errorSound = "/Sound/Error.mp3";
  // Email/Password Submission Handler
  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await emailPasswordSignIn(email, password);
      toast.success("🎉 Welcome back! You are logged in.");
      navigate("/");
      playSound(loginSound);
    } catch (error) {
      console.log(error);
      let message = "⚠️ Login Failed: Invalid Email or Password.";
      if (error.code === "auth/user-not-found") {
        message = "User not found. Please sign up.";
      } else if (error.code === "auth/wrong-password") {
        message = "Incorrect password. Please try again.";
      }
      toast.error(message);
      playSound(errorSound);
    } finally {
      setFormLoading(false);
    }
  };
  //  Google Login Handler
  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      toast.success("🎉 Logged in successfully with Google!");
      navigate("/");
      playSound(loginSound);
    } catch (error) {
      if (error.code !== "auth/popup-closed-by-user") {
        toast.error("⚠️ Google login failed. Please try again.");
      }
      playSound(errorSound);
    }
  };

  return (
    <div className="p-3 w-full flex mt-5">
      <div className="hidden md:flex w-[50%]">
        <img
          src={LoginImage}
          alt="Login"
          loading="lazy"
          className="object-cover "
        />
      </div>
      {/* Login Form */}
      <div className="w-full md:w-[50%] p-5 border border-blue-500 rounded-md bg-blue-400/30 flex flex-col space-y-3 ">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center font-sans ">SigmaMart</h1>
        {/* Dis */}
        <p className="text-2xl text-center">Login to SigmaMart</p>
        {/* Form */}
        <form
          action=""
          className="space-y-3 mt-5 w-full"
          onSubmit={handleEmailPasswordLogin}
        >
          {/* Email */}
          <label
            htmlFor="name"
            className="block text-sm text-blue-500 font-medium mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none"
          />
          {/* Password */}
          <label
            htmlFor="name"
            className="block text-sm text-blue-500 font-medium mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none"
          />
          {/* Login Button */}
          <DynamicButton
            children="Login"
            loading={formLoading}
            type={"submit"}
            disabled={formLoading}
          />
        </form>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-blue-500"></div>
          <span className="mx-2 text-black">OR</span>
          <div className="flex-grow h-px bg-blue-500"></div>
        </div>
        {/* Google Login */}
        <GoogleLoginButton
          children="Login with Google"
          onClick={handleGoogleLogin}
          disabled={formLoading}
        />
        <div>
          {/* SignUp */}
          <p className="text-center text-gray-500 text-sm mt-2">
            Don't have an account?
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/createac")}
            >
              {" "}
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
