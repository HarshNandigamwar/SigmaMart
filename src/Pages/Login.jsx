import React from "react";
// importing image
import LoginImage from "/login.jpg";
// import from Components
import DynamicButton from "../Components/LoaderComponents/NormalLoaderComponents/DynamicButton";
import GoogleLoginButton from "../Components/LoaderComponents/NormalLoaderComponents/GoogleLoginButton";
const Login = () => {
  return (
    <div className="p-3 w-full flex mt-5">
      <div className="hidden md:flex w-[50%]">
        <img src={LoginImage} alt="Login" className="object-cover " />
      </div>

      {/* Login Form */}
      <div className="w-full md:w-[50%] p-5 border border-blue-500 rounded-md bg-blue-400/30 flex flex-col space-y-3 ">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center font-sans ">SigmaMart</h1>
        {/* Dis */}
        <p className="text-2xl text-center">Login to SigmaMart</p>
        {/* Form */}
        <form action="" className="space-y-3 mt-5 w-full">
          {/* Email */}
          <label
            htmlFor="name"
            className="block text-sm text-blue-500 font-medium mb-2"
          >
            Email
          </label>
          <input
            id="name"
            type="email"
            name="name"
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
            name="name"
            required
            className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none"
          />
        </form>
        {/* Login Button */}
        <DynamicButton children="Login" loading={false} />
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-blue-500"></div>
          <span className="mx-2 text-black">OR</span>
          <div className="flex-grow h-px bg-blue-500"></div>
        </div>
        {/* Google Login */}
        <GoogleLoginButton children="Login with Google" loading={false} />
        <div>
          {/* SignUp */}
          <p className="text-center text-gray-500 text-sm mt-2">
            Don't have an account?
            <span className="text-blue-500 cursor-pointer"> Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
