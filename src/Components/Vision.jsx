import React from "react";

const Vision = () => {
  return (
    <div className="flex  flex-row-reverse h-auto mx-16 my-32 p-8 rounded-3xl shadow-2xl bg-primary text-primary-content border border-primary-content vision-container">
      <div className="h-full w-3/4 image-holder">
        <h3 className="text-4xl font-bold mb-4 card-title source-code-pro-extra-bold flex items-center">
          Vision of
          <img
            src="/Images/SAGE text_blue.png"
            alt="CompanyLogo"
            className="w-20 ml-4"
          />
        </h3>
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl card-title pl-4 source-code-pro-regular">
            Shastry Associates Global Enterprise
          </h4>
          <p className="text-lg">
            It is also known as SAGE, aims to lead in RF, microwave, and
            wireless technologies through focused research and development, as
            well as strategic partnerships. We plan to expand our product line
            with innovative, customer-centric solutions while strengthening our
            global presence. By prioritizing sustainability and leveraging
            cutting-edge research, SAGE is set to deliver exceptional,
            future-proof products that meet the evolving needs of the industry.
            Our commitment to excellence drives us to continuously improve and
            adapt our offerings, ensuring that we provide top-notch, reliable
            technology solutions. As we forge ahead, SAGE remains dedicated to
            advancing the field and setting new standards in engineering, driven
            by a passion for innovation and a vision for a connected future.
          </p>
        </div>
      </div>
      <div className="img-container w-[30rem] my-auto mr-8 hide hide-tb">
        <img src="/Images/bulb.jpg" alt="Vision" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default Vision;
