import React from "react";
import Branches from "./Branches";
import ContactInfo from "./ContactInfo";
import QuickLinks from "./QuickLinks";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <footer className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4">
      <Branches />
      <QuickLinks />
      <ContactInfo />
      <SocialMedia />
      <div className="capitalize font-light text-[#666] dark:text-primary sm:col-span-2 md:col-span-3 xl:col-span-4 p-2 border-t text-center">
        creadet by{" "}
        <span className="text-orange  font-normal">Arian Hajiaghaei</span> | all
        rights reserved
      </div>
    </footer>
  );
}

export default Footer;
