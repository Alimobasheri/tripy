import { useEffect } from "react";

import Blogs from "./components/blogs/Blogs";
import ContactForm from "./components/contact/ContactForm";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FilterForm from "./components/home/FilterForm";
import Home from "./components/home/Home";
import Packages from "./components/packages/Packages";
import Pricing from "./components/pricing/Pricing";
import Reviews from "./components/reviews/Reviews";
import Services from "./components/services/Services";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    console.log("aos js started!!");
    AOS.init({
      startEvent: "load",
      duration: 800,
      easing: "ease",
      delay: 400,
    });
    // AOS.refresh();
  }, []);

  return (
    <>
      <Header />

      <Home />
      <FilterForm />
      <Packages />
      <Services />
      <Pricing />
      <Reviews />
      <ContactForm />
      <Blogs />

      <Footer />
    </>
  );
}

export default App;
