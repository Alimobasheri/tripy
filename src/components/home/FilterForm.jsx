import React from "react";

function FilterForm() {
  return (
    <section>
      <div
        className="container-box"
        data-aos={"zoom-in"}
        // data-aos-offset={"450"}
      >
        <form
          action=""
          className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-2"
        >
          <div>
            <span className="text-[#666] dark:text-primary font-light text-xs sm:text-sm lg:text-base">
              Where To
            </span>
            <input
              className="block w-full bg-primary dark:bg-primary_dark"
              type="text"
              placeholder="search places"
            />
          </div>
          <div>
            <span className="text-[#666] dark:text-primary font-light text-xs sm:text-sm lg:text-base ">
              Arrivals
            </span>
            <input
              className="block w-full bg-primary dark:bg-primary_dark"
              type="date"
            />
          </div>
          <div>
            <span className="text-[#666] dark:text-primary font-light text-xs sm:text-sm lg:text-base">
              Leaving
            </span>
            <input
              className="block w-full bg-primary dark:bg-primary_dark"
              type="date"
            />
          </div>

          <div className="flex items-end justify-center md:col-span-3 xl:col-span-1">
            <button className="btn py-2 px-6 w-full">Book Now</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FilterForm;
