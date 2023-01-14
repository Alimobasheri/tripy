import React from "react";
const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Packages", href: "#packages" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
  { name: "Blogs", href: "#blogs" },
];
function QuickLinks() {
  return (
    <div data-aos={"fade-up"}>
      <h4 className="text-xl lg:text-2xl font-bold my-2 text-secondary_dark dark:text-secondary capitalize">
        quick links
      </h4>
      <div>
        {quickLinks.map((ql, index) => (
          <a
            key={index}
            className="quick-links flex items-center"
            href={ql.href}
          >
            <span class="bx bxs-chevron-right text-orange bg-transparent mr-1 text-sm lg:text-lg xl:text-xl" />
            {ql.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;
