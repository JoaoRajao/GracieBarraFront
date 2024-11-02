import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import routes from '../utils/routes'; 

const AdminPanel = () => {
  return (
    <>
     <link rel="stylesheet" href="../assets/css/adminPanel.css" />
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
          <Link href={routes.cadastroAluno} className="btn">Cadastrar</Link>
        </div>

        <div className="menu-item">
          <i className="fas fa-users"></i>
          <h2>Visualizar Alunos</h2>
          <p>Veja a lista de todos os alunos</p>
          <Link href={routes.exibirAlunos} className="btn">Visualizar</Link>
        </div>

        <div className="menu-item">
          <i className="fas fa-money-bill-wave"></i>
          <h2>Visualizar Pagamentos</h2>
          <p>Acompanhe os pagamentos dos alunos</p>
          <Link href={routes.pagamentoAluno} className="btn">Visualizar</Link>
        </div>

        <div className="menu-item">
          <i className="fas fa-calendar-alt"></i>
          <h2>Agendar Treinos</h2>
          <p>Gerencie os horários de treinos</p>
          <Link href={routes.agendamento} className="btn">Agendar</Link>
        </div>

        <div className="menu-item">
          <i className="fas fa-file-invoice-dollar"></i>
          <h2>Gerenciar Planos</h2>
          <p>Cadastre e gerencie os planos</p>
          <Link href={routes.planosCadastro} className="btn">Gerenciar</Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AdminPanel;
