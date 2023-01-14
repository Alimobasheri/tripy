import React from "react";
import { blogs } from "../../constants/blogs";
import Blog from "./Blog";

function Blogs() {
  return (
    <section id="blogs">
      <h1>
        Our
        <span className="underline decoration-orange ml-2">Blogs</span>
      </h1>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-4 py-8">
        {blogs.map((b, index) => (
          <Blog key={index} blogData={b} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
