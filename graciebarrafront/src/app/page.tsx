import '../assets/css/style.css'; 

export default function HomePage() {
  return (
    <>
      <head>
        <title>Gracie Barra</title>
        <link rel="icon" type="image/png" href="/assets/images/logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@600;700;800;900&family=Rubik:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
      </head>

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
              <li>
                <a href="#home" className="navbar-link active" data-nav-link>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="navbar-link" data-nav-link>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#class" className="navbar-link" data-nav-link>
                  Aulas
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link" data-nav-link>
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <a href="login.html" className="btn btn-login">
            Login
          </a>

          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </header>

      <main>
        <article>
          {/* HERO SECTION */}
          <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section>
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">
                  <strong className="strong">Gracie</strong>Barra
                </p>
                <h1 className="h1 hero-title">Acompanhe seu progresso</h1>
                <p className="section-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsa doloribus reprehenderit
                  impedit architecto consequuntur aperiam perspiciatis perferendis qui quam numquam, dicta, eveniet quis
                  quidem vitae ducimus incidunt ullam et.
                </p>
              </div>

              <div className="hero-banner">
                <img src="/assets/images/gracie2.png" width="500" height="753" alt="hero banner" />
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section className="section about" id="about" aria-label="about">
            <div className="container">
              <div className="about-banner has-after">
                <img src="/assets/images/gracie1.png" width="660" height="648" loading="lazy" alt="about banner" className="w-100" />
              </div>

              <div className="about-content">
                <h2 className="h2 section-title">Vizualize a agenda das aulas</h2>
                <p className="section-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt autem culpa qui ab fuga placeat
                  veritatis maiores, dicta alias nulla, earum optio aut? Aliquid quae nesciunt molestiae? Libero, enim
                  voluptas!
                </p>
                <p className="section-text">
                  Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum
                  ante ipsum primis.
                </p>
              </div>
            </div>
          </section>
        </article>
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
              <li>
                <p className="footer-list-title has-before">Links</p>
              </li>
              <li>
                <a href="#" className="footer-link">Home</a>
              </li>
              <li>
                <a href="#" className="footer-link">Sobre</a>
              </li>
              <li>
                <a href="#" className="footer-link">Aulas</a>
              </li>
              <li>
                <a href="#" className="footer-link">Contato</a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Contato</p>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.88-7.12l-2.83-2.83a.9959.9959 0 011.41-1.41l1.42 1.42 4.24-4.24a.9959.9959 0 011.41 1.41l-5.65 5.65z" />
                  </svg>
                </div>
                <address className="address footer-link">Av. Sebastião de Brito, 49 - Dona Clara, Belo Horizonte - MG, 31260-000</address>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm1-9c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1c0 1.66-1.34 3-3 3v2h2v-1c1.66 0 3-1.34 3-3s-1.34-3-3-3z" />
                  </svg>
                </div>
                <div>
                  <a href="tel:(31) 99686-7945" className="footer-link">(31) 99686-7945</a>
                  <a href="tel:(31) 99686-7945" className="footer-link">(31) 99686-7945</a>
                </div>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm1-9c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1c0 1.66-1.34 3-3 3v2h2v-1c1.66 0 3-1.34 3-3s-1.34-3-3-3z" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:vendas@graciebarra.com" className="footer-link">vendas@graciebarra.com</a>
                  <a href="mailto:vendas@graciebarra.com" className="footer-link">vendas@graciebarra.com</a>
                </div>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Redes Sociais</p>
              </li>
              <li>
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.88-7.12l-2.83-2.83a.9959.9959 0 011.41-1.41l1.42 1.42 4.24-4.24a.9959.9959 0 011.41 1.41l-5.65 5.65z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.88-7.12l-2.83-2.83a.9959.9959 0 011.41-1.41l1.42 1.42 4.24-4.24a.9959.9959 0 011.41 1.41l-5.65 5.65z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
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

      <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
          <path d="M12 3l-9 9h6v9h6v-9h6z" />
        </svg>
      </a>

      <script src="/assets/js/script.js" defer></script>
    </>
  );
}