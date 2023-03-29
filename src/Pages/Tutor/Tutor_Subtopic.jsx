import React from 'react'
import { useForm } from "react-hook-form";


const Tutor_Subtopic = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
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
                {`This is Course > topic name > Sub Topic Name Form!`}
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                  <div>
                    <label htmlFor="subtopicname">Sub Topic Name</label>
                    <input
                      id="subtopicname"
                      name="title"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      {...register("subtopicname", {
                        required: "this field is required.",
                        minLength: {
                          value: 4,
                          message: "Please Enter Sub topic name minimum 4 characters",
                        },
                      })}
                    />
                    {errors.title && (
                      <span className="text-red-900">{errors.title.message}</span>
                    )}
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
      )
}

export default Tutor_Subtopic