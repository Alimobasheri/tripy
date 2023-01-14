import React from "react";

function Review({ reviewData }) {
  return (
    <div className="container-box" data-aos={"zoom-in"}>
      <div className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full ">
        <img
          className="w-full h-full rounded-full"
          src={reviewData.image}
          alt={reviewData.name}
        />
      </div>
      <div className="mt-2">
        <h4 className="text-center text-secondary_dark dark:text-primary font-bold text-xl sm:text-2xl">
          {reviewData.name}
        </h4>
        <p className="text-center font-light ">{reviewData.comment}</p>
      </div>
      <div>
        <span class="bx bxs-star text-orange bg-transparent md:text-xl"></span>
        <span class="bx bxs-star text-orange bg-transparent md:text-xl"></span>
        <span class="bx bxs-star text-orange bg-transparent md:text-xl"></span>
        <span class="bx bxs-star text-orange bg-transparent md:text-xl"></span>
        <span class="bx bxs-star-half text-orange bg-transparent md:text-xl"></span>
      </div>
    </div>
  );
}

export default Review;
