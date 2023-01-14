import React from "react";

function Service({ serviceData }) {
  return (
    <div className="container-box" data-aos={"zoom-in"}>
      <div className="flex items-center justify-between w-full">
        <div className="bg-orange w-12 h-12 rounded-full flex items-center justify-center">
          <span
            className={`bx ${serviceData.icon} text-primary bg-transparent text-2xl`}
          />
        </div>
        <span className="text-[#666] dark:text-primary text-3xl font-bold">
          {serviceData.id}
        </span>
      </div>
      <div>
        <h4 className="text-xl font-bold mt-2 text-secondary_dark dark:text-secondary capitalize">
          {serviceData.title}
        </h4>
        <p>{serviceData.description}</p>
      </div>
    </div>
  );
}

export default Service;
