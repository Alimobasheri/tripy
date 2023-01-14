import React from "react";

function Blog({ blogData }) {
  return (
    <div className="container-box" data-aos={"flip-left"}>
      <div className="w-full aspect-video overflow-hidden relative  bg-primary rounded-md ">
        <img
          className=" rounded w-full h-full object-cover transition-transform duration-300 hover:scale-125"
          src={blogData.image}
          alt={`${blogData.title}Img`}
        />
      </div>
      <div className="border-b dark:border-primary py-3">
        <h4 className="text-base lg:text-lg font-bold my-2 text-secondary_dark dark:text-secondary capitalize">
          {blogData.title}
        </h4>

        <button className="btn py-2 px-6">Read More</button>
      </div>

      <div className="flex items-center justify-between w-full py-2">
        <div className="flex items-center">
          <span class="bx bxs-calendar text-orange bg-transparent mr-1 sm:text-base lg:text-xl" />
          <span className="text-xs sm:text-sm lg:text-base text-[#666] dark:text-primary capitalize">
            {blogData.date}
          </span>
        </div>

        <div className="flex items-center">
          <span class="bx bxs-user text-orange bg-transparent mr-1 sm:text-base lg:text-xl" />
          <span className="text-xs sm:text-sm lg:text-base text-[#666] dark:text-primary capitalize">
            By {blogData.author}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
