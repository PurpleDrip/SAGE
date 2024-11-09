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
      <div className="gap-16 mx-24">
        <div className="chat-container mx-36  p-8 shadow-2xl rounded-3xl bg-accent">
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
            <div className="chat-bubble">What do u offer at SAGE?</div>
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
        <div className="flex flex-col gap-16 mt-32">
          <h1 className="text-5xl font-bold text-center text-accent">
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
                image:
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
                isNew: false,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
              {
                title: "Tutorials",
                image:
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
                isNew: true,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
              {
                title: "Training",
                image:
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
                isNew: false,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
              {
                title: "Consulting",
                image:
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
                isNew: true,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
              {
                title: "Workshops",
                image:
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
                isNew: false,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
              {
                title: "News",
                image:
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
                isNew: false,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
              {
                title: "Upcoming Events",
                image:
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
                isNew: false,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
              },
            ].map((item, i) => (
              <div
                className="card bg-base-100 w-96 shadow-xl relative"
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <figure>
                  <img src={item.image} alt={item.title} />
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
                  } para-container absolute bottom-0 h-full w-full bg-black/50 flex items-center justify-center px-8 rounded-2xl`}
                >
                  <p className="text-white text-xl text-center">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
