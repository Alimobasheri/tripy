import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import ZoomInSearchBox from "./ZoomInSearchBox";
import Navbar from "./Navbar";

function Header() {
  const [activeSearchBox, setActiveSearchBox] = useState(false);
  const [activeLoginFormBox, setActiveLoginFormBox] = useState(false);
  const [activeNavbarBox, setActiveNavbarBox] = useState(false);
  // dark Mode
  const [darkMode, setdarkMode] = useState(false);
  const ToggleMode = () => {
    if (darkMode) {
      console.log("dark Mode enabled!");
      document.documentElement.classList.add("dark");
    } else {
      console.log("dark mode disabled !");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    ToggleMode();
  }, [darkMode]);
  // --------------------------------

  return (
    <header>
      <a href="#" className="font-bold text-2xl xl:text-3xl dark:text-primary ">
        <span class="bx bxl-telegram text-orange text-2xl xl:text-3xl mr-1" />
        Travel
      </a>
      <ZoomInSearchBox activeSearchBox={activeSearchBox} />
      <LoginForm activeLoginFormBox={activeLoginFormBox} />
      <Navbar activeNavbarBox={activeNavbarBox} />

      <form
        action=""
        className={
          " hidden lg:flex lg:items-center w-[60%] xl:w-[40%] relative "
        }
      >
        <input
          className=" w-full p-3 bg-primary dark:bg-primary_dark"
          id="searchBox"
          placeholder="Search here ..."
        />
        <label
          className="bx bx-search absolute right-2 text-2xl"
          htmlFor="searchBox"
        />
      </form>

      <div>
        <i
          onClick={() => {
            if (activeLoginFormBox || activeNavbarBox) {
              setActiveLoginFormBox(false);
              setActiveNavbarBox(false);
            }
            setActiveSearchBox((prev) => !prev);
          }}
          class="bx bx-search p-2 text-xl lg:hidden "
        ></i>
        <i
          onClick={() => {
            setdarkMode((prevMode) => !prevMode);
          }}
          class={`bx ${
            darkMode ? "bxs-sun" : "bxs-moon"
          } ml-2 p-2 text-xl lg:text-2xl lg:p-3`}
        ></i>
        <i
          onClick={() => {
            if (activeSearchBox || activeNavbarBox) {
              setActiveSearchBox(false);
              setActiveNavbarBox(false);
            }
            setActiveLoginFormBox((prev) => !prev);
          }}
          class="bx bxs-user mx-2 p-2 text-xl lg:text-2xl lg:p-3 "
        ></i>
        <i
          onClick={() => {
            if (activeSearchBox || activeLoginFormBox) {
              setActiveSearchBox(false);
              setActiveLoginFormBox(false);
            }
            setActiveNavbarBox((prev) => !prev);
          }}
          class="bx bx-menu p-2 text-xl lg:text-2xl lg:p-3 "
        ></i>
      </div>
    </header>
  );
}

export default Header;
