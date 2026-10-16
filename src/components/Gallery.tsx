import React from "react";
import s1 from "../assets/smartGaya1.jpg";
import s2 from "../assets/smartGaya2.jpg";
import s3 from "../assets/smartGaya3.jpg";
import s4 from "../assets/smartGaya4.jpg";

const Gallery: React.FC = () => {
  const screens = [
    { image: s1, title: "Explore local services", number: "01" },
    { image: s2, title: "Discover Gaya", number: "02" },
    { image: s3, title: "Shop everyday essentials", number: "03" },
    { image: s4, title: "Navigate your account", number: "04" },
  ];

  return (
    <div className="gallery-showcase">
      <div className="gallery-heading">
        <div>
          <span className="section-eyebrow">SMART GAYA / MOBILE APP</span>
          <h2>Project Glimpse</h2>
        </div>
        <p>One app, built around the everyday needs of a local community.</p>
      </div>
      <div className="gallery-device-stage">
        {screens.map(({ image, title, number }, index) => (
          <figure
            className={`gallery-device gallery-device--${index + 1}`}
            key={number}
          >
            <div className="gallery-device-frame">
              <div className="gallery-device-camera" aria-hidden="true" />
              <img src={image} alt={title} loading="lazy" />
            </div>
            <figcaption>
              <span>{number}</span>
              {title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
