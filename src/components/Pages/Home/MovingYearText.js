import React from "react";

function MovingYearText() {
  const texts = ["Established in 2020", "100% Satisfied Clients"];
  return (
    <div className="pt-30 overflow-hidden">
      {texts.map((text, index) => (
        <div key={index} className="marquee marquee-style-1">
          <div className="marquee-track marquee-animation">
            <div>{text}</div>
            {[...Array(30)].map((_, i) => (
              <div key={i} aria-hidden="true">
                {text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovingYearText;
