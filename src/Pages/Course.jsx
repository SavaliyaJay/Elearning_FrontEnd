import React, { useState } from "react";
import Tutor_Content from "./Tutor/Tutor_Content";
// import Tutor_Content_video from "./Tutor/Tutor_Content_video";
// import Tutor_Content_description from "./Tutor/Tutor_Content_description";
// import Tutor_Content_title from "./Tutor/Tutor_Content_title";
// import Tutor_Course from "./Tutor/Tutor_Cou";
// import Tutor_Topic from "./Tutor/Tutor_topic";
// import Tutor_Subtopic from './Tutor/Tutor_Subtopic';

const Course = () => {
  const [shown, setshown] = useState(false);
  const [updtxt, setupdtxt] = useState("Add A Course");
  const handleShow = (event) => {
    setshown((current) => !current);
    if (shown === true) {
      setupdtxt("Add A Course");
    } else {
      setupdtxt("Close This Course Section");
    }
  };
  return (
    <>
      <div className="mt-10 ml-10">
        <button
          className="inline-flex items-center px-4 py-2 font-bold bg-indigo-700 hover:bg-indigo-800 text-white text-sm  rounded-md"
          onClick={handleShow}
        >
          {updtxt && `${updtxt}`}
        </button>
      </div>
      {shown && (
        <div className="mt-10 ml-10">
          {
            // eslint-disable-next-line
            <Tutor_Content/>
            // <Tutor_Subtopic />
            // <Tutor_Topic />
            // <Tutor_Course />
            // <Tutor_Content_video />
            // <Tutor_Content_description />
            // <Tutor_Content_title/>
          }
        </div>
      )}

      {
        // eslint-disable-next-line
        //  <Tutor_subsection />
      }
    </>
  );
};

export default Course;
