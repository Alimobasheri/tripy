import React from "react";
const contactInfo = [
  { item: "123-456-789", icon: "bxs-phone", href: "#" },
  { item: "111-222-3333", icon: "bxs-phone", href: "#" },
  { item: "test@test.com", icon: "bxs-envelope", href: "#" },
  { item: "tehran , Iran - 2023", icon: "bxs-location-plus", href: "#" },
];
function ContactInfo() {
  return (
    <div data-aos={"fade-up"}>
      <h4 className="text-xl lg:text-2xl font-bold my-2 text-secondary_dark dark:text-secondary capitalize">
        contact info
      </h4>
      <div>
        {contactInfo.map((ci, index) => (
          <a
            key={index}
            className="quick-links flex items-center"
            href={ci.href}
          >
            <span
              class={`bx ${ci.icon} text-orange bg-transparent mr-1 text-sm lg:text-lg xl:text-xl`}
            />
            {ci.item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
