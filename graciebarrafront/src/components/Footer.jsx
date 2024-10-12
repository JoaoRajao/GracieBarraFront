
import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="section footer-top bg-dark has-bg-image">
      <div className="container">
        <div className="footer-brand">
          <a href="#" className="logo">
            <span className="span">Gracie Barra</span>
          </a>
          <p className="footer-brand-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, adipisci!</p>
          <div className="wrapper">
            <img src="/assets/images/footer-clock.png" width="34" height="34" loading="lazy" alt="Clock" />
            <ul className="footer-brand-list">
              <li><p className="footer-brand-title">Segunda - Sexta</p><p>8:00 - 22:00</p></li>
              <li><p className="footer-brand-title">Sábado - Domingo</p><p>8:00 - 18:00</p></li>
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
        <ul className="footer-list">
          <li><p className="footer-list-title has-before">Contato</p></li>
          <li className="footer-list-item">
            <address className="address footer-link">Av. Sebastião de Brito, 49 - Dona Clara, Belo Horizonte - MG, 31260-000</address>
          </li>
          <li className="footer-list-item">
            <a href="tel:(31) 99686-7945" className="footer-link">(31) 99686-7945</a>
          </li>
          <li className="footer-list-item">
            <a href="mailto:vendas@graciebarra.com" className="footer-link">vendas@graciebarra.com</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li><p className="footer-list-title has-before">Redes Sociais</p></li>
          <li><a href="#" className="social-link">Social Link</a></li>
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
);

export default Footer;
