import React from "react";
const branches = [
  { name: "India", href: "#" },
  { name: "Russia", href: "#" },
  { name: "Japan", href: "#" },
  { name: "France", href: "#" },
  { name: "Canada", href: "#" },
];

function Branches() {
  return (
    <div data-aos={"fade-up"}>
      <h4 className="text-xl lg:text-2xl font-bold my-2 text-secondary_dark dark:text-secondary capitalize">
        our branches
      </h4>
      <div>
        {branches.map((b, index) => (
          <a
            key={index}
            className="quick-links flex items-center"
            href={b.href}
          >
            <span class="bx bxs-location-plus text-orange bg-transparent mr-1 text-sm lg:text-lg xl:text-xl" />
            {b.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Branches;
