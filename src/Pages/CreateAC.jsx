import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// importing from sonner
import { toast } from "sonner";
// importing image
import CreateAccount from "/createAC.png";
// import from Components
import DynamicButton from "../Components/LoaderComponents/NormalLoaderComponents/DynamicButton";
// importing from context
import { useAuth } from "../Context/AuthProvider.jsx";
//Importing from Hook
import useScrollToTop from "../Hooks/useScrollToTop";
import playSound from '../Hooks/playSound'
const CreateAC = () => {
  useScrollToTop();
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
    const loginSound = '/Sound/login.mp3'
   const errorSound = '/Sound/Error.mp3'
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      playSound(errorSound);
      return;
    }
    setFormLoading(true);
    try {
      // 1. Sign Up function call kiya
      await signUp(email, password);
      toast.success("🎉 Account created successfully! Welcome.");
      navigate("/");
      playSound(loginSound)
    } catch (error) {
      console.log(error);
      let message = "⚠️ Failed to create account. Please try again.";
      if (error.code === "auth/email-already-in-use") {
        message = "This email address is already registered.";
      } else if (error.code === "auth/weak-password") {
        message = "Password should be at least 6 characters.";
      }
      toast.error(message);
      playSound(errorSound);
    } finally {
      setFormLoading(false);
    }
  };
  return (
    <div className="p-3 w-full flex mt-5">
      <div className="hidden md:flex w-[50%]">
        <img src={CreateAccount} alt="Login" loading="lazy" className="object-cover " />
      </div>
      {/* Create Account Form */}
      <div className="w-full md:w-[50%] p-5 border border-blue-500 rounded-md bg-blue-400/30 flex flex-col space-y-3 ">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center font-sans ">SigmaMart</h1>
        {/* Dis */}
        <p className="text-2xl mt-2 text-center">Create Account on SigmaMart</p>
        {/* Form */}
        <form
          onSubmit={handleSignUp}
          action=""
          className="space-y-3 mt-5 w-full"
        >
          {/* Email */}
          <label
            htmlFor="email"
            className="block text-sm text-blue-500 font-medium mb-2"
          >
            Email
          </label>
          <input
            id="name"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none"
          />
          {/* Password */}
          <label
            htmlFor="Password"
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
          {/* conform Password */}
          <label
            htmlFor="name"
            className="block text-sm text-blue-500 font-medium mb-2"
          >
            Conform Password
          </label>
          <input
            id="conformpassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none"
          />
          {/* Login Button */}
          <DynamicButton children="Login" loading={formLoading} />
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-600 hover:text-indigo-700 cursor-pointer font-medium"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default CreateAC;
