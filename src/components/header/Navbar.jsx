import React from "react";
const NavbarItems = [
  { name: "Home", href: "#home" },
  { name: "Packages", href: "#packages" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
  { name: "Blogs", href: "#blogs" },
];
function Navbar({ activeNavbarBox }) {
  return (
    <nav
      className={`absolute transition duration-200 top-[115%] right-8  bg-secondary dark:bg-secondary_dark p-4 w-[75%] sm:w-[40%] rounded-md shadow-md ${
        activeNavbarBox ? "scale-100" : "scale-0"
      }`}
    >
      {NavbarItems.map((item, index) => (
        <a key={index} href={item.href} className="quick-links block">
          {item.name}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
