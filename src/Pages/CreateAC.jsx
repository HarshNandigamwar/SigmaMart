import React from "react";
// importing image
import CreateAccount from "/createAC.png";
// import from Components
import DynamicButton from "../Components/LoaderComponents/NormalLoaderComponents/DynamicButton";
const CreateAC = () => {
  return (
    <div className="p-3 w-full flex mt-5">
      <div className="hidden md:flex w-[50%]">
        <img src={CreateAccount} alt="Login" className="object-cover " />
      </div>
      {/* Create Account Form */}
      <div className="w-full md:w-[50%] p-5 border border-blue-500 rounded-md bg-blue-400/30 flex flex-col space-y-3 ">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center font-sans ">SigmaMart</h1>
        {/* Dis */}
        <p className="text-2xl mt-2 text-center">Create Account on SigmaMart</p>
        {/* Form */}
        <form action="" className="space-y-3 mt-5 w-full">
          {/* name */}
          <label
            htmlFor="name"
            className="block text-sm text-blue-500 font-medium mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="name"
            name="name"
            required
            className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none"
          />
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
      </div>
    </div>
  );
};

export default CreateAC;
