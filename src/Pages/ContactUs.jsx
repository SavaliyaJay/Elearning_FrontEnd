import React from "react";
import { Link } from "react-router-dom";


const ContactUs = () => {
  return (
    <>
      {/* component */}
      <div className="mt-10 mb-10 h-95">
        <div className="flex justify-center items-center bg-white">
          {/* COMPONENT CODE */}
          <div className="container mx-auto my-9 px-4 lg:px-20">
            <div className="w-full p-8  my-3 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Send us a <br /> message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Phone*"
                />
              </div>
              <div className=" my-3">
                <textarea
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  defaultValue={""}
                />
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
              <div className="flex flex-col text-white">
                <h1 className="font-bold uppercase text-4xl  my-3">
                  Drop in our office
                </h1>
                <div className="flex  my-2">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-map-marker-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Address</h2>
                      <p className="text-gray-400">
                        139, CHARUSAT Campus, Highway, Off, Nadiad - Petlad Rd,
                        Changa, Gujarat 388421
                      </p>
                    </div>
                  </i>
                </div>
                <div className="flex  my-2">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-map-marker-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Phone Number</h2>
                      <p className="text-gray-400">709-655-9963</p>
                    </div>
                  </i>
                </div>
                <div className="flex  my-2">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-map-marker-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Email address</h2>
                      <p className="text-gray-400">d22ce156@charusat.edu.in</p>
                    </div>
                  </i>
                </div>
                <div className="flex  my-2">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-map-marker-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      <h2 className="text-2xl">website address</h2>
                      <p className="text-gray-400">
                        <Link to="/" className="text-blue-500">
                            {" "}
                          Click here!
                        </Link>
                      </p>
                    </div>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
