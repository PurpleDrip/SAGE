import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-lg mb-4">
          At SAGE, we offer a variety of services that include the following:
        </p>
        <ul className="list-inside list-disc text-lg mb-4">
          <li><strong>Courses</strong> – on-site or off-site: online live web-based lectures or prerecorded lectures at your pace.</li>
          <li><strong>Tutorials</strong> – online free knowledge and information as articles or videos.</li>
          <li><strong>Workshops</strong> – on-site or off-site, live web-based.</li>
          <li><strong>Training</strong> – on-site or off-site, live web-based.</li>
          <li><strong>Consulting</strong> – engineering consulting services upon request.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
