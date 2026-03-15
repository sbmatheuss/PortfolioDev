import React, { useEffect } from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';

export default function Hero() {
  
  useEffect(() => {
    // Lógica para detectar o scroll e revelar elementos
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-reveal');
        }
      });
    }, { threshold: 0.1 }); // Dispara quando 10% do item aparece

    const elements = document.querySelectorAll('.hidden-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Limpeza ao desmontar
  }, []);

  return (
    <>
      {/* 1. HERO */}
      <section className="heroContainer">
        <div className="content">
          <p>Olá, visitante! 👋</p>
          <h1 className="name">Meu nome é Matheus Braga</h1>
          <p className="typing-effect">Desenvolvedor Full-Stack</p>
        </div>
        <div className="scroll"><span>ROLAR</span><div className="vLine"></div></div>
      </section>

      {/* 2. SOBRE MIM */}
      <section className="about-section">
        <div className="about-container">
          {/* FOTO ENTRANDO PELA ESQUERDA */}
          <div className="image-placeholder hidden-reveal reveal-left">
            <img src="./images/AIperfil.jpeg" alt="Foto de Perfil" />
          </div>
          
          <div className="about-text">
            <h2 className="hidden-reveal">Sobre mim</h2>
            <p className="hidden-reveal">
              Desenvolvedor Full-Stack em formação, cursando Análise e Desenvolvimento de Sistemas com foco em soluções web escaláveis. Minha base técnica é centrada no ecossistema JavaScript e TypeScript, atuando na criação de interfaces reativas com React e Next.js e no desenvolvimento de APIs RESTful robustas com Node.js e NestJS.
              <br /> <br /> 
              Tenho experiência prática na modelagem de bancos de dados relacionais (PostgreSQL, MySQL) e estou sempre em busca de resolver problemas complexos com código limpo e eficiente.
            </p>
            
            <div className="tech-stack">
              <span className="tech-item hidden-reveal"><FaReact /> React</span>
              <span className="tech-item hidden-reveal"><SiNextdotjs /> Next.js</span>
              <span className="tech-item hidden-reveal"><SiTypescript /> TS</span>
              <span className="tech-item hidden-reveal"><FaNodeJs /> Node.js</span>
              <span className="tech-item hidden-reveal"><FaDatabase /> PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJETOS EM DESTAQUE */}
      <section className="projects-section">
        <h2 className="section-title hidden-reveal">Projetos em Destaque</h2>
        <div className="projects-grid">
          {[
            { name: 'GameVault', url: '#' },
            { name: 'WeatherApp', url: '#' },
            { name: 'Portfolio', url: '#' }
          ].map((proj) => (
            <div key={proj.name} className="project-card hidden-reveal">
              <h3>{proj.name}</h3>
              <p>Descrição curta sobre este projeto incrível.</p>
              <a href={proj.url} target="_blank" rel="noopener noreferrer">Ver detalhes →</a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONTATO */}
      <footer className="contact-section hidden-reveal">
        <h2>Vamos conversar?</h2>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/matheusbraga1/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/sbmatheuss" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <a href="mailto:seuemail@gmail.com"><FaEnvelope /> E-mail</a>
        </div>
      </footer>
    </>
  );
}