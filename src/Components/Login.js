import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password } = credentials;
    try {
      toast("Login Successfully", "success");
      console.log({ name: name, password: password });
    } catch (error) {
      toast("Some error occur", "danger");
      console.error(error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#00000d] h-[100vh] flex justify-center items-center">
      <div className="p-8 w-11/12 max-w-[450px] bg-[#333333] py-10 rounded-xl ">
        <h1 className="font-semibold text-3xl text-white text-center">
          Welcome Back
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} className=" mt-4">
          <label className="w-full" htmlFor="name">
            <p className="mb-1 text-white">
              Username <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={onChange}
              value={credentials.name}
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] p-[12px]"
            />
          </label>
          <label htmlFor="password" className="relative">
            <p className="mb-1 mt-4 text-white">
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              value={credentials.password}
              onChange={onChange}
              id="password"
              name="password"
              required
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[90px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <div className="flex justify-center items-center">
            <button
              className="rounded-[8px] mt-16 bg-yellow-50 py-[8px] px-[12px]"
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
