import React from "react";

function ContactForm() {
  return (
    <section id="contact">
      <h1>
        <span className="underline decoration-orange mr-2">Contact</span>
        Us
      </h1>

      <form
        action=""
        className="my-8 grid sm:grid-cols-2  gap-x-2 gap-y-4"
        data-aos={"zoom"}
      >
        <div className="container-box p-1" data-aos={"fade-up"}>
          <input
            type="text"
            placeholder="name"
            className="w-full bg-transparent font-light"
          />
        </div>
        <div className="container-box p-1" data-aos={"fade-up"}>
          <input
            type="email"
            placeholder="email"
            className="w-full bg-transparent font-light"
          />
        </div>
        <div className="container-box p-1" data-aos={"fade-up"}>
          <input
            type="number"
            placeholder="number"
            className="w-full bg-transparent font-light"
          />
        </div>
        <div className="container-box p-1" data-aos={"fade-up"}>
          <input
            type="text"
            placeholder="subject"
            className="w-full bg-transparent font-light"
          />
        </div>
        <div className="container-box p-1 sm:col-span-2" data-aos={"fade-up"}>
          <textarea
            placeholder="Your message "
            className="w-full bg-transparent font-light "
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div
          className="flex items-center justify-center sm:col-span-2"
          data-aos={"fade-up"}
        >
          <button className="btn py-2 px-4" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
