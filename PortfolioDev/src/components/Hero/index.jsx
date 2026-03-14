import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function Hero() {
  return (
    <>
      {/* 1. HERO */}
      <section className="heroContainer">
        <div className="content">
          <p>Olá, visitante! 👋</p>
          <h1 className="name">Meu nome é Matheus Braga</h1>
          <p style={{ letterSpacing: '2px', color: '#ccc' }}>Desenvolvedor Full-Stack</p>
        </div>
        <div className="scroll"><span>ROLAR</span><div className="vLine"></div></div>
      </section>

      {/* 2. SOBRE MIM */}
      <section className="about-section">
        <div className="about-container">
          <div className="image-placeholder"><img src="./public/images/AIperfil.jpeg" alt="Foto de Perfil" /></div>
          <div className="about-text">
            <h2>Sobre mim</h2>
            <p>Desenvolvedor Full-Stack em formação, cursando Análise e Desenvolvimento de Sistemas com foco em soluções web escaláveis. Minha base técnica é centrada no ecossistema JavaScript e TypeScript, atuando na criação de interfaces reativas com React e Next.js e no desenvolvimento de APIs RESTful robustas com Node.js e NestJS.
              <br /> <br /> Tenho experiência prática na modelagem de bancos de dados relacionais (PostgreSQL, MySQL) e estou sempre em busca de resolver problemas complexos com código limpo e eficiente. Sou um aprendiz ágil, movido pela tecnologia e comprometido em colaborar ativamente em times de alta performance.</p>
            <div className="tech-stack">
              <span className="tech-item"><FaReact /> React</span>
              <span className="tech-item"><SiNextdotjs /> Next.js</span>
              <span className="tech-item"><SiTypescript /> TS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJETOS EM DESTAQUE */}
      <section className="projects-section">
        <h2 className="section-title">Projetos em Destaque</h2>
        <div className="projects-grid">
          {[
            { name: 'GameVault', url: 'https://link-do-seu-projeto1.com' },
            { name: 'WeatherApp', url: 'https://link-do-seu-projeto2.com' },
            { name: 'Portfolio', url: 'https://github.com/seuusuario/portfolio' }
          ].map((proj) => (
            <div key={proj.name} className="project-card">
              <h3>{proj.name}</h3>
              <p>Descrição curta sobre este projeto incrível que desenvolvi.</p>
              <a href={proj.url} target="_blank" rel="noopener noreferrer">Ver detalhes →</a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONTATO */}
      <footer className="contact-section">
        <h2>Vamos conversar?</h2>
        <p>Estou aberto a novas oportunidades e desafios.</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/matheusbraga1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/sbmatheuss" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> E-mail
          </a>
        </div>
      </footer>
    </>
  );
}