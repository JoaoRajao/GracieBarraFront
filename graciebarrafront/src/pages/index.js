
import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Gracie Barra</title>
        
        <link rel="icon" type="image/png" href="/assets/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@600;700;800;900&family=Rubik:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src="/assets/images/logo.png" alt="Logo" className="logo-img" />
            <span className="span">Gracie Barra</span>
          </a>
          <nav className="navbar" data-navbar>
            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
                <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71a1 1 0 10-1.42 1.42L10.59 12l-4.89 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.42z" />
              </svg>
            </button>
            <ul className="navbar-list">
              <li><a href="#home" className="navbar-link active" data-nav-link>Home</a></li>
              <li><a href="#about" className="navbar-link" data-nav-link>Sobre</a></li>
              <li><a href="#class" className="navbar-link" data-nav-link>Aulas</a></li>
              <li><a href="#" className="navbar-link" data-nav-link>Contato</a></li>
            </ul>
          </nav>
          <a href="login.html" className="btn btn-login">Login</a>
          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </header>

      <main>
        <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section>
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle"><strong className="strong">Gracie</strong>Barra</p>
              <h1 className="h1 hero-title">Acompanhe seu progresso</h1>
              <p className="section-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsa doloribus impedit architecto.
              </p>
            </div>
            <div className="hero-banner">
              <img src="/assets/images/gracie2.png" width="500" height="753" alt="hero banner" />
            </div>
          </div>
        </section>
        {/* Other sections... */}
      </main>

      <footer className="footer">
        <div className="section footer-top bg-dark has-bg-image">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <span className="span">Gracie Barra</span>
              </a>
              <p className="footer-brand-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, adipisci!
              </p>
              <div className="wrapper">
                <img src="/assets/images/footer-clock.png" width="34" height="34" loading="lazy" alt="Clock" />
                <ul className="footer-brand-list">
                  <li>
                    <p className="footer-brand-title">Segunda - Sexta</p>
                    <p>8:00 - 22:00</p>
                  </li>
                  <li>
                    <p className="footer-brand-title">Sábado - Domingo</p>
                    <p>8:00 - 18:00</p>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="footer-list">
              <li><p className="footer-list-title has-before">Links</p></li>
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Sobre</a></li>
              <li><a href="#" className="footer-link">Aulas</a></li>
              <li><a href="#" className="footer-link">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2024 All Rights Reserved By <a href="#" className="copyright-link">Gracie Barra</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
