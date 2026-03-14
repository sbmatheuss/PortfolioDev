import React from 'react';
import './Hero.css';

// Use the image placed in `public/images/background.jpg`
const bgPath = '/images/background.jpg';

function Hero() {
  return (
    <section
      className="heroContainer"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="content">
        <h1 className="name">Matheus Braga</h1>
        <div className="social">
          <div className="line" />
          <div className="icons">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
          <div className="line" />
        </div>
      </div>
      <div className="scroll">
        Scroll
        <div className="vLine" />
      </div>
    </section>
  );
}

export default Hero;
