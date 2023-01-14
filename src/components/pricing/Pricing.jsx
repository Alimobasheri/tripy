import React from "react";
import { plans } from "../../constants/plans";
import Plan from "./Plan";

export default function Pricing() {
  return (
    <section id="pricing">
      <h1>
        Our
        <span className="underline decoration-orange ml-2">Pricing</span>
      </h1>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-4 py-8">
        {plans.map((p, index) => (
          <Plan key={index} planData={p} />
        ))}
      </div>
    </section>
  );
}
