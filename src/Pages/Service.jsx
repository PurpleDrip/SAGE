import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="breadcrumbs text-sm pl-8">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
        </ul>
      </div>
      <div className="flex-grow w-3/5 mx-auto flex flex-col gap-4 mt-16">
        <h1 className="text-5xl font-bold tracking-[1rem] pl-4 after-underline text-center text-accent after:bg-accent mb-4">
          Courses
        </h1>
        <p className="text-center text-xl">
          The purpose of SAGE RF Courses is to provide engineering and
          technology courses and certificate programs in various specialized
          Radio Frequency, Millimeter-wave, Microwave, and Wireless Systems at
          beginners, intermediate, and advanced levels. Services are provided
          for both college students and experienced industry engineers looking
          for continued education or refresher courses, workshops, and training.
          Materials on this site are offered for a fee. Delivery options vary
          and include but are not limited to: online, at-your-own-pace
          pre-recorded multiple-session courses with periodic instructor input,
          or live web-based or in-person multiple-session courses. Each of the
          courses will be delivered by our experienced SAGE Team subject matter
          experts in specific RF engineering and technology topics. Currently,
          this site is under construction and will be updated on a continuous
          basis as we add materials and courses in a periodic timeframe. Please
          be sure to keep visiting our page for updates and new materials. We
          welcome your inquiries, requests, and suggestions.
        </p>
        <h1 className="text-center text-xl">
          Please contact us at{" "}
          <a
            href="mailto:info@shastryassociates.com"
            className="link link-hover"
          >
            info@shastryassociates.com
          </a>
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
