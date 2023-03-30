import React, { useState } from "react";
import Tutor_Content_video from "./Tutor_Content_video";
import Tutor_Content_description from "./Tutor_Content_description";
import Tutor_Content_title from "./Tutor_Content_title";

const Tutor_Content = () => {
    
  // title
  const [showntit, setshowntit] = useState(false);
  const [updtxttit, setupdtxttit] = useState("Add A Title");

  //   description
  const [showndec, setshowndec] = useState(false);
  const [updtxtdec, setupdtxtdec] = useState("Add A Description");

  //   video
  const [shownvid, setshownvid] = useState(false);
  const [updtxtvid, setupdtxtvid] = useState("Add A Video");

  // title
  const handleShowtit = (event) => {
    setshowntit((current) => !current);
    setshowndec((current) => current=false);
    setshownvid((current) => current=false);

    if (showntit === true) {
      setupdtxttit("Add A Title");
    } else {
      setupdtxttit("Close This Title Section");
      setupdtxtdec("Add A Description");
      setupdtxtvid("Add A Video");
    }
  };

  //   description
  const handleShowdec = (event) => {
    setshowndec((current) => !current);
    setshowntit((current) => current=false);
    setshownvid((current) => current=false);

    if (showndec === true) {
      setupdtxtdec("Add A Description");
    } else {
      setupdtxtdec("Close This Description Section");
      setupdtxttit("Add A Title");
      setupdtxtvid("Add A Video");
    }
  };

  //   video
  const handleShowvid = (event) => {
    setshownvid((current) => !current);
    setshowndec((current) => current=false);
    setshowntit((current) => current=false);

    if (shownvid === true) {
      setupdtxtvid("Add A Video");
    } else {
      setupdtxtvid("Close This Video Section");
      setupdtxtdec("Add A Description");
      setupdtxttit("Add A Title");
    }
  };
  return (
    <>
      <div className="mt-10 ml-10">
        <button
          className="inline-flex items-center px-4 py-2 font-bold bg-indigo-700 hover:bg-indigo-800 text-white text-sm  rounded-md mr-5"
          onClick={handleShowtit}
        >
          {updtxttit && `${updtxttit}`}
        </button>

        <button
          className="inline-flex items-center px-4 py-2 font-bold bg-indigo-700 hover:bg-indigo-800 text-white text-sm  rounded-md mr-5"
          onClick={handleShowdec}
        >
          {updtxtdec && `${updtxtdec}`}
        </button>

        <button
          className="inline-flex items-center px-4 py-2 font-bold bg-indigo-700 hover:bg-indigo-800 text-white text-sm  rounded-md mr-5"
          onClick={handleShowvid}
        >
          {updtxtvid && `${updtxtvid}`}
        </button>
      </div>
      {showntit && (
        <div className="mt-10 ml-10">
          {
            // eslint-disable-next-line
            <Tutor_Content_title />
          }
        </div>
      )}
      {showndec && (
        <div className="mt-10 ml-10">
          {
            // eslint-disable-next-line
            <Tutor_Content_description />
          }
        </div>
      )}
      {shownvid && (
        <div className="mt-10 ml-10">
          {
            // eslint-disable-next-line
            <Tutor_Content_video />
          }
        </div>
      )}
    </>
  );
};

export default Tutor_Content;
