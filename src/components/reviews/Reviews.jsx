import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Review from "./Review";
import { reviews } from "../../constants/reviews";

function Reviews() {
  const settings = {
    arrows: false,
    dots: true,
    dotsClass: " slick-dots text-orange",
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "my-8",
  };
  return (
    <section id="reviews">
      <h1>
        Client's
        <span className="underline decoration-orange ml-2">Review</span>
      </h1>

      <Slider {...settings}>
        {reviews.map((r, index) => (
          <Review key={index} reviewData={r} />
        ))}
      </Slider>
    </section>
  );
}

export default Reviews;
