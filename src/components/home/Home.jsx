import React from "react";
import home_img from "../../assets/images/home-img.svg";

export default function Home() {
  return (
    <section id="home" className="grid xl:grid-cols-2 items-center gap-6 ">
      <div className="" data-aos={"fade-down"}>
        <img src={home_img} alt="home-img-svg" className="w-full " />
      </div>

      <div className="" data-aos={"fade-up"}>
        <h3>Adventure Is Worthwhile</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          explicabo eius inventore reprehenderit alias eos facilis, ipsa est
          asperiores repellendus!
        </p>
        <button className="btn py-2 px-4">Explore Now</button>
      </div>
    </section>
  );
}
