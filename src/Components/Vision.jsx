import React from "react";

const Vision = () => {
  return (
    <div className="h-[20rem] mx-16 my-32 p-8 rounded-xl shadow-2xl card bg-primary text-primary-content">
      <h3 className="text-4xl font-bold mb-4 card-title source-code-pro-extra-bold">
        Vision of
        <img
          src="/Images/SAGE text_blue.png"
          alt=""
          className="w-20 ml-4 inline"
        />
      </h3>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl card-title flex flex-col items-start">
          <h2 className=" pl-4 source-code-pro-regular">
            Shastry Associates Global Enterprise,
          </h2>
          <p>
            also known as SAGE aims to leadin RF, microwave, and wireless
            technologies through focused R&D and strategic partnerships. We plan
            to expand our product line with innovative, customer-centric
            solutions while strengthening our global presence. By prioritizing
            sustainability and leveraging cutting-edge research, SAGE is set to
            deliver exceptional, future-proof products that meet the evolving
            needs of the industry. needs of the industry.
          </p>
        </h2>
      </div>
    </div>
  );
};

export default Vision;
