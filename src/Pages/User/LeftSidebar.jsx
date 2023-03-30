import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="bg-gray-100 h-screen w-1/4 p-4">
      <div className="mb-4">
        <h3 className="font-bold text-gray-900 mb-2">Section 1</h3>
        <ul>
          <li className="hover:text-blue-500 cursor-pointer">Subsection 1.1</li>
          <li className="hover:text-blue-500 cursor-pointer">Subsection 1.2</li>
          <li className="hover:text-blue-500 cursor-pointer">Subsection 1.3</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-2">Section 2</h3>
        <ul>
          <li className="hover:text-blue-500 cursor-pointer">Subsection 2.1</li>
          <li className="hover:text-blue-500 cursor-pointer">Subsection 2.2</li>
          <li className="hover:text-blue-500 cursor-pointer">Subsection 2.3</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
