import React from "react";

function Package({ packageData }) {
  return (
    <div className="container-box" data-aos={"fade-up"}>
      <div className="w-full aspect-video overflow-hidden relative">
        <img
          className=" rounded w-full h-full object-cover"
          src={packageData.image}
          alt={`${packageData.title}Img`}
        />
        <div className="absolute top-2 left-2 bg-[#000]/50  text-primary flex items-center rounded-md p-1">
          <span class="bx bxs-location-plus text-orange bg-transparent" />
          <span className="font-normal">{packageData.title}</span>
        </div>
      </div>
      <div>
        <div className="text-secondary_dark dark:text-secondary font-bold text-xl mt-5">
          {packageData.price}
          <span className="line-through text-xs font-light text-[#666] ml-1 dark:text-primary">
            {packageData.initialPrice}
          </span>
        </div>

        <div>
          <p className="font-light">{packageData.description}</p>
          <button className="btn py-2 px-6">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Package;
