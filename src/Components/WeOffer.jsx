import React, { useRef, useState } from "react";

const WeOffer = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div>
      <div className="gap-16 mx-24 offer-wrapper">
        <div className="chat-container mx-36  p-8 shadow-2xl rounded-3xl ">
          <div className="chat chat-start ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Rookie
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble ">What do u offer at SAGE?</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Team SAGE
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">You live under a rock ?</div>

            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>
        <div className="flex flex-col gap-16 mt-32 offer-container">
          <h1 className="text-5xl font-bold text-center text-accent source-code-pro-extra-bold after-underline after:bg-secondary">
            What we Offer at
            <img
              src="/Images/SAGE text_blue.png"
              alt=""
              className="w-24 ml-4 inline"
            />
          </h1>
          <div className="card-wrapper flex flex-wrap gap-16 mx-auto">
            {[
              {
                title: "Courses",
                image: "/Images/offer2.jpg",
                isNew: false,
                para: "Unlock potential with tailored courses: on-site, online, live, or prerecorded.",
              },
              {
                title: "Tutorials",
                image: "/Images/offer1.png",
                isNew: true,
                para: "Comprehensive tutorials: free knowledge, articles, videos, anytime, anywhere.",
              },
              {
                title: "Training",
                image: "/Images/offer3.jpg",
                isNew: false,
                para: "Specialized training: on-site, remote, live web-based, practical learning.",
              },
              {
                title: "Consulting",
                image: "/Images/offer4.jpg",
                isNew: true,
                para: "Top-tier consulting: expert advice, innovative solutions, tailored to needs.",
              },
              {
                title: "Workshops",
                image: "/Images/offer5.jpg",
                isNew: false,
                para: "Dynamic workshops: on-site, online, real-time, collaboration, hands-on learning.",
              },
              {
                title: "News",
                image: "/Images/offer6.jpg",
                isNew: false,
                para: "Stay updated with the latest industry insights, events, and breakthroughs.",
              },
            ].map((item, i) => (
              <a
                href={`/services/#${item.title}`}
                className="no-underline card-with-link"
                key={i}
              >
                <div
                  className="card bg-base-100 w-96 shadow-xl relative"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <figure className="h-48 bg-[#B3E240] flex items-center justify-center offer-img-container">
                    <img src={item.image} alt={item.title} className="" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {item.title}
                      {item.isNew && (
                        <div className="badge badge-secondary">NEW</div>
                      )}
                    </h2>
                  </div>
                  <div
                    className={`${
                      hoveredCard === i ? "flex" : "hidden"
                    } para-container absolute top-0 h-[68%] w-full bg-black/50 flex items-center justify-center px-8 hide`}
                  >
                    <p className="text-white text-xl text-center">
                      {item.para}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
