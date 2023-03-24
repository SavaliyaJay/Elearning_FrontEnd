import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="mt-10">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
          <h1 className="text-xl font-bold capitalize dark: text-center mb-1">
            Login Here!
          </h1>
          <h2 className="text-xl capitalize dark: text-center mb-5">
            Enter Your Details
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  {...register("email", {
                    required: "this field is required.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "please enter a valid e-mail address.",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-900">{errors.email.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  {...register("password", {
                    required: "this field is required.",
                  })}
                />
                {errors.password && (
                  <span className="text-red-900">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="text-end col-span-2">ForGot Password?</div>
            </div>
            <hr className="mt-3" />
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Login
              </button>
            </div>
            <div className=" text-center mt-3">
              Need an account?
              <Link to="/Registration" className="text-blue-500">
                {" "}
                Sign up
              </Link>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
