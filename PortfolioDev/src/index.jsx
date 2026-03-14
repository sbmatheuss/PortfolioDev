import React from 'react';
import './Hero.css';
import './Projects/Projects.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="heroContainer">
      <div className="content">
        <p>Olá, visitante! 👋</p>
        <h1 className="name">Meu nome é Yuri</h1>
        <p style={{ letterSpacing: '2px', color: '#ccc' }}>Desenvolvedor Front-end</p>

        <div className="social">
          <div className="line"></div>
          <div className="icons">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
          <div className="line"></div>
        </div>
      </div>

      <div className="scroll">
        <span>SCROLL</span>
        <div className="vLine"></div>
      </div>
    </section>

    
  );

  
}

