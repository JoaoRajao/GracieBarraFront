import React from 'react';
import Link from 'next/link';
import routes from '../utils/routes';

const Header = () => (
  <header className="header" data-header>
    
    <div className="container">
      <Link href="/" className="logo">
        <img src="/assets/images/logo.png" alt="Logo" className="logo-img" />
        <span className="span">Gracie Barra</span>
      </Link>
      <nav className="navbar" data-navbar>
        <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
            <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71a1 1 0 10-1.42 1.42L10.59 12l-4.89 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.89a1 1 0 001.42-1.42L13.41 12l4.89-4.88a1 1 0 000-1.42z" />
          </svg>
        </button>
        <ul className="navbar-list">
          <li><Link href="/" className="navbar-link active" data-nav-link>Home</Link></li>
          <li><Link href="#about" className="navbar-link" data-nav-link>Sobre</Link></li>
          <li><Link href="#class" className="navbar-link" data-nav-link>Aulas</Link></li>
          <li><Link href="#contact" className="navbar-link" data-nav-link>Contato</Link></li>
        </ul>
      </nav>
      
      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </div>
  </header>
);

export default Header;
