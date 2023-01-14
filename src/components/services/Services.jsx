import React from "react";
import { services } from "../../constants/services";
import Service from "./Service";

export default function Services() {
  return (
    <section id="services">
      <h1>
        Our
        <span className="underline decoration-orange ml-2">Services</span>
      </h1>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-2 gap-y-4 py-8">
        {services.map((s, index) => (
          <Service key={index} serviceData={s} />
        ))}
      </div>
    </section>
  );
}
