import React from "react";

function LoginForm({ activeLoginFormBox }) {
  return (
    <div
      className={`absolute transition duration-200 top-[115%] right-8  bg-secondary dark:bg-secondary_dark p-4 w-[80%] sm:w-[50%] rounded-md shadow-md ${
        activeLoginFormBox ? "scale-100" : "scale-0"
      }`}
    >
      <form className="w-full" action="">
        <div className="w-full flex flex-col mb-2">
          <label className="font-light text-sm mb-1" htmlFor="username">
            Username
          </label>
          <input
            className="font-light bg-primary dark:bg-primary_dark"
            type="text"
            id="username"
            placeholder="enter your name"
          />
        </div>
        <div className="w-full flex flex-col mb-2">
          <label className="font-light text-sm mb-1" htmlFor="password">
            Password
          </label>
          <input
            className="font-light bg-primary dark:bg-primary_dark"
            type="password"
            id="password"
            placeholder="enter your password"
          />
        </div>

        <div className="w-full flex my-2">
          <input type="checkbox" name="remember" id="remember" />
          <label className="font-light text-sm ml-1" htmlFor="remember">
            Remember Me
          </label>
        </div>

        <button type="submit" className="btn w-full py-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
