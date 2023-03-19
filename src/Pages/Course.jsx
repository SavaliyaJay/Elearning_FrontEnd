import React from "react";
import { useForm } from "react-hook-form";

const Course = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
          <h1 className="text-xl text-center font-bold capitalize dark:">
            Account settings
          </h1>
          <h2 className="text-sm text-center capitalize dark:">
            This is Course Form!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label htmlFor="coursename">Course Name</label>
                <input
                  id="coursename"
                  name="title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                //   ref={register}
                {...register("title")}
                />
                {/* <span>wrong</span> */}
              </div>
              <div>
                <label className="block text-sm font-medium ">Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 "
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        //   ref={register}
                        {...register("file-upload")}
                        />
                      </label>
                      <p className="pl-1 ">or drag and drop</p>
                    </div>
                    <p className="text-xs ">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                //   ref={register}
                {...register("price")}
                />
                {/* <span>wrong</span> */}
              </div>
              <div>
                <label htmlFor="tutorname">Tutor Name</label>
                <input
                  id="tutorname"
                  name="tutorname"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                //   ref={register}
                {...register("tutorname")}
                />
                {/* <span>wrong</span> */}
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Course;
