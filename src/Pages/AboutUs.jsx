import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("description");

  // Update active section based on URL hash
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the '#' from the hash
    setActiveSection(hash || "description"); // Default to "description" if no hash is present
  }, []);

  return (
    <div>
      <Header setActiveSection={setActiveSection} isAboutUs={true} />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          SAGE (Shastry Associates Global Enterprises) is an international group of highly qualified and accomplished engineers and entrepreneurs with a long track record of engineering and technology experience in industry and academia.
        </p>
        <p className="text-lg mb-4">
          Their knowledge is very well rooted both in the fundamentals of electronics and communication engineering in general and in applied electromagnetics, RF circuits and antennas, and wireless communication systems in particular.
        </p>
        <p className="text-lg mb-4">
          SAGE associates are also excellent communicators. They disseminate knowledge through courses, tutorials, and workshops to provide a deep understanding of the subject matter and insights therein, as well as guidelines for design and applications of the theory. They can also provide training, consulting, customized courses, tutorials, and workshops on demand.
        </p>

        {/* Dynamic Content Based on Active Section */}
        {activeSection === "description" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-lg">
              SAGE provides expertise in applied electromagnetics, RF circuits, antennas, and wireless communication systems.
            </p>
          </div>
        )}

        {activeSection === "sageTeam" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">SAGE Team</h2>
            <p className="text-lg mb-4">
              The SAGE team consists of engineers and entrepreneurs specializing in wireless technologies, RF systems, and applied electromagnetics.
            </p>
            <ul className="list-disc ml-6">
              <li>Expert engineers with industry and academic experience</li>
              <li>Innovators in wireless communication</li>
              <li>Proven track record in delivering results</li>
            </ul>
          </div>
        )}

        {activeSection === "mission" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Mission</h2>
            <p className="text-lg">
              Our mission is to foster innovative engineering solutions and provide high-quality educational resources to empower the next generation of engineers.
            </p>
          </div>
        )}

        {activeSection === "vision" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Vision</h2>
            <p className="text-lg">
              Our vision is to be a global leader in engineering education and innovation, driving advancements in technology and fostering a community of passionate professionals.
            </p>
          </div>
        )}

        {activeSection === "goal" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Goal</h2>
            <p className="text-lg">
              Our goal is to bridge the gap between academic knowledge and practical application, providing engineers with the skills and insights they need to excel in their careers.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
