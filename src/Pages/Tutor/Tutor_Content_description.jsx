import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const Tutor_Content_description = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const clickhere = async (event) => {
    event.preventDefault();
    const newdata = {content: {description : content}}
    console.log(newdata);
    // console.log(content);
  };
  return (
    <>
      <div className="mt-10">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
          <h1 className="text-xl font-bold capitalize dark: text-center mb-1">
          Sub Topic settings
          </h1>
          <h2 className="text-xl capitalize dark: text-center mb-5">
          {`This is Course > Topic > SubTopic > Description Form!`}
          </h2>
          <hr />
          <form onSubmit={clickhere} id="myForm" > 
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label htmlFor="passwordConfirmation">Text Area</label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  onChange={(newContent) => setContent(newContent)}
                />

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
                  >
                   Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Tutor_Content_description;
