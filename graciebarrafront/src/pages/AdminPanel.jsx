import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';


const AdminPanel = () => {
  return (
    <>
      <Head>
        <title>Menu do Administrador</title>
        <link rel="shortcut icon" href="/assets/images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a81368914c.js" async></script>
      </Head>

      <Header />

      <main className="container">
        <header>
          <h1>Painel do Administrador</h1>
          <p className="welcome-message">
            Bem-vindo, <span id="admin-name">Admin</span>
          </p>
        </header>

        <div className="menu-item">
          <i className="fas fa-user-plus"></i>
          <h2>Cadastrar Aluno</h2>
          <p>Adicione novos alunos ao sistema</p>
          <a href="cadastroAluno.html" className="btn">
            Cadastrar
          </a>
        </div>

        <div className="menu-item">
          <i className="fas fa-users"></i>
          <h2>Visualizar Alunos</h2>
          <p>Veja a lista de todos os alunos</p>
          <a href="exibirAlunos.html" className="btn">
            Visualizar
          </a>
        </div>

        <div className="menu-item">
          <i className="fas fa-money-bill-wave"></i>
          <h2>Visualizar Pagamentos</h2>
          <p>Acompanhe os pagamentos dos alunos</p>
          <a href="pagamentoAluno.html" className="btn">
            Visualizar
          </a>
        </div>

        <div className="menu-item">
          <i className="fas fa-calendar-alt"></i>
          <h2>Agendar Treinos</h2>
          <p>Gerencie os horários de treinos</p>
          <a href="agendamento.html" className="btn">
            Agendar
          </a>
        </div>

        <div className="menu-item">
          <i className="fas fa-file-invoice-dollar"></i>
          <h2>Gerenciar Planos</h2>
          <p>Cadastre e gerencie os planos</p>
          <a href="planosCadastro.html" className="btn">
            Gerenciar
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AdminPanel;