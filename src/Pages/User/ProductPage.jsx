import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";

function Course() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [boxContent, setBoxContent] = useState("Nothing is here");

  function toggleSubMenu() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }

  function handleClick(option) {
    if (option === "Social") {
      setBoxContent("Social content");
    } else if (option === "Personal") {
      setBoxContent("Personal content");
    } else if (option === "Friends") {
      setBoxContent("Friends content");
    }
  }

  return (
    <>
      <div className="flex ">
        <div className="flex flex-row  w-full h-[50rem]">
          {/* leftsidebar  */}
          <div className="sidebar  top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
            <div className="text-gray-100 text-xl">
              <div className="p-2.5 mt-1 flex items-center">
                <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                  Course Name
                </h1>
              </div>
              <div className="my-2 bg-gray-600 h-[1px]"></div>

              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                onClick={toggleSubMenu}
              >
                <div className="flex justify-between w-full items-center">
                  <span className="text-[15px] ml-4 text-gray-200 font-bold">
                    Chatbox
                  </span>
                  {isSubMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </div>
              </div>
              <div
                className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
                  isSubMenuOpen ? "" : "hidden"
                }`}
                id="submenu"
              >
                <h1
                  className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"
                  onClick={() => handleClick("Social")}
                >
                  Social
                </h1>
                <h1
                  className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"
                  onClick={() => handleClick("Personal")}
                >
                  Personal
                </h1>
                <h1
                  className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"
                  onClick={() => handleClick("Friends")}
                >
                  Friends
                </h1>
              </div>
            </div>
          </div>
          {/* end leftsidebar  */}

          {/* box  */}
          <div className="p-10 bg-black w-full text-slate-100">{boxContent}</div>
        </div>
      </div>
    </>
  );
}

export default Course;
