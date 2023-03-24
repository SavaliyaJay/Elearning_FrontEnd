import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="mt-10">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
          <h1 className="text-xl font-bold capitalize dark: text-center mb-1">
            Register Here!
          </h1>
          <h2 className="text-xl capitalize dark: text-center mb-5">
            Enter Your Details
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  {...register("username", {
                    required: "this field is required.",
                    minLength: {
                      value: 4,
                      message: "Please Enter Username minimum 4 characters",
                    },
                  })}
                />
                {errors.username && (
                  <span className="text-red-900">
                    {errors.username.message}
                  </span>
                )}
              </div>
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
              <div>
                <label htmlFor="passwordConfirmation">
                  Password Confirmation
                </label>
                <input
                  id="passwordConfirmation"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  {...register("confPassword", {
                    required: "this field is required.",
                    validate: (value) =>
                      value === getValues("password") ||
                      "password doesn't match.",
                  })}
                />
                {errors.confPassword && (
                  <span className="text-red-900">
                    {errors.confPassword.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  {...register("phone", {
                    required: "this field is required.",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "please enter a valid e-mail address.",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-red-900">{errors.phone.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="passwordConfirmation">Select</label>
                <select
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  {...register("type", {
                    required: "this field is required.",
                  })}
                >
                  <option value="">Select your type for registration</option>
                  <option value="true">Student</option>
                  <option value="false">Tutor</option>
                </select>
                {errors.type && (
                  <span className="text-red-900">{errors.type.message}</span>
                )}
              </div>
            </div>
            <hr className="mt-3" />
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Let's Go
              </button>
            </div>
            <div className="mt-3 text-center">
              Already have an account?
              <Link to="/Login" className="text-blue-500">
                {" "}
                Sign in
              </Link>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Registration;
