import React from "react";

function ZoomInSearchBox({ activeSearchBox }) {
  return (
    <form
      action=""
      className={`absolute transition duration-200 top-[115%] right-3 sm:right-8 w-[90%] mx-auto bg-secondary dark:bg-secondary_dark flex items-center p-1 rounded shadow-md ${
        activeSearchBox ? "scale-100" : "scale-0"
      }`}
    >
      <input
        className="bg-transparent w-full"
        id="searchBox"
        placeholder="Search here ..."
      />
      <label className="bx bx-search " htmlFor="searchBox" />
    </form>
  );
}

export default ZoomInSearchBox;
