import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import routes from '../utils/routes'; 


const Login = () => {
  return (
    <>
    <link rel="stylesheet" href="/assets/css/login.module.css" />
      <Head>
        <title>Login</title>
        <link rel="shortcut icon" href="/assets/images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a81368914c.js" async></script>
      </Head>

      <div className="container">
        <img className="wave" src="/assets/images/wave.png" alt="Background Wave" />
        <div className="img">
          <img src="/assets/images/logo2.png" alt="Logo" />
        </div>

        <div className="login-content">
          <form action="/index.html">
            <img src="/assets/images/avatar.svg" alt="Avatar" />
            <h2 className="title">Bem-Vindo</h2>

            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Usuário</h5>
                <input type="text" className="input" />
              </div>
            </div>

            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Senha</h5>
                <input type="password" className="input" />
              </div>
            </div>

            <a href="#">Esqueceu sua Senha?</a>
            <Link href={routes.AdminPanel} className="btn">Login</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
