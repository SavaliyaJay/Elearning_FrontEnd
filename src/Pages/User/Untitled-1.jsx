import React, { useState } from "react";

function Course() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function toggleSubMenu() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }

  return (
    <div className="sidebar  top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">
            Course Name
          </h1>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        onClick={toggleSubMenu}
      >
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Chatbox
          </span>
          <span
            className={`text-sm ${isSubMenuOpen ? "rotate-180" : ""}`}
            id="arrow"
          ></span>
        </div>
      </div>
      <div
        className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
          isSubMenuOpen ? "" : "hidden"
        }`}
        id="submenu"
      >
        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
          Social
        </h1>
        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
          Personal
        </h1>
        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
          Friends
        </h1>
      </div>
    </div>
  );
}

export default Course;
