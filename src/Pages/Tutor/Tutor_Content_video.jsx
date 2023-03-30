import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';


const Tutor_Course_video = () => {
    const [file, setFile] = useState();
    const {
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (e) => {
        const newdata = {content: {video :  file}}
        console.log(newdata);
      };
  return (
    <>
    <div>
      <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
        <h1 className="text-xl text-center font-bold capitalize dark:">
          Sub Topic settings
        </h1>
        <h2 className="text-xl text-center capitalize dark:">
          {`This is Course > Topic > SubTopic > video Form!`}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">

          <div>
                <label className="block text-sm font-medium ">Video</label>
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
                    {/* <div className="flex text-sm text-gray-600"> */}
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className>Upload a file</span>
                      <input
                        id="file-upload"
                        type="file"
                        className="sr-only"
                        name='video'
                        onChange={(e) => setFile(e.target.files[0])} 
                      />
                    </label>
                    {/* </div> */}
                    <p className="text-xs ">mp3/mp4 up to 1 GB</p>
                  </div>
                </div>
                {errors.fileVideo && (
                  <span className="text-red-900">{errors.fileVideo.message}</span>
                )}
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
  )
}

export default Tutor_Course_video