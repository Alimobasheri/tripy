import React from "react";
const socialMedia = [
  { item: "Facebook", icon: "bxl-facebook", href: "#" },
  { item: "Twitter", icon: "bxl-twitter", href: "#" },
  { item: "Instagram", icon: "bxl-instagram", href: "#" },
  { item: "Linkedin", icon: "bxl-linkedin-square", href: "#" },
  { item: "Pinterest", icon: "bxl-pinterest", href: "#" },
];
function SocialMedia() {
  return (
    <div data-aos={"fade-up"}>
      <h4 className="text-xl lg:text-2xl font-bold my-2 text-secondary_dark dark:text-secondary capitalize">
        follow us
      </h4>
      <div>
        {socialMedia.map((sm, index) => (
          <a
            key={index}
            className="quick-links flex items-center"
            href={sm.href}
          >
            <span
              class={`bx ${sm.icon} text-orange bg-transparent mr-1 text-sm lg:text-lg xl:text-xl`}
            />
            {sm.item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;
