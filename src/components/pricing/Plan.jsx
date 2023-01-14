import React from "react";

function Plan({ planData }) {
  return (
    <div className="container-box" data-aos={"zoom-in-up"}>
      <div className="bg-primary p-2 dark:bg-primary_dark dark:text-primary w-full rounded-md capitalize font-bold flex items-center justify-center">
        {planData.title}{" "}
      </div>
      <div className="text-[#666] dark:text-primary mt-3">
        $<span className="font-bold text-3xl">{planData.price}</span>/Mo
      </div>
      <div className="capitalize flex flex-col items-center justify-center my-3">
        {planData.options.map((o, index) => (
          <p
            key={index}
            className="text-[#666] dark:text-primary py-2 font-light"
          >
            {o}
          </p>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn py-2 px-4">Choose Plan</button>
      </div>
    </div>
  );
}

export default Plan;
