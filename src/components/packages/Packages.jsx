import React from "react";
import { packages } from "../../constants/packages";
import Package from "./Package";

function Packages() {
  return (
    <section id="packages">
      <h1>
        Our
        <span className="underline decoration-orange ml-2">Packages</span>
      </h1>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 py-8">
        {packages.map((p, index) => (
          <Package key={index} packageData={p} />
        ))}
      </div>
    </section>
  );
}

export default Packages;
