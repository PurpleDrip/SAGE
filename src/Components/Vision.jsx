import React from "react";

const Vision = () => {
  return (
    <div className="h-[20rem] mx-16 my-32 p-8 bg-primary rounded-xl shadow-2xl">
      <h3 className="text-4xl font-bold mb-4">
        Vision of
        <img src="/Images/SAGETEXT.png" alt="" className="w-20 ml-4 inline" />
      </h3>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl">
          Shastry Associates Global Enterprise (SAGE), a group of diverse
          professionals committed to disseminating knowledge with excellence in
          the fields of radio frequency, microwave, and wireless engineering and
          technologies.
        </h2>
        <p className="text-lg">
          Our vision is to be the leading provider of innovative solutions in
          the field of technology. We aim to deliver cutting-edge products and
          services that meet the evolving needs of our customers.
        </p>
      </div>
    </div>
  );
};

export default Vision;
