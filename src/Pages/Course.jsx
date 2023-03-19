import React from 'react'

const Course = () => {
  return (
    <>
      <div>
                <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
                    <h1 className="text-xl font-bold capitalize dark:">Account settings</h1>
                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                            <div >
                                <label htmlFor="username">Username</label>
                                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                <span>wrong</span>
                            </div>
                           
                        </div>
                        <div className="flex justify-center mt-6">
                            <button type="submit" className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none">Submit</button>
                        </div>
                    </form>
                </section>


            </div>
    </>
  )
}

export default Course