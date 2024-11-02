import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CadastroAluno = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // Mostra o popup de sucesso
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Fecha o popup
  };

  return (
    <>
    
      <Header />
      <Head>
        <title>Cadastro de Aluno - Gracie Barra</title>
        <link rel="shortcut icon" href="/assets/images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a81368914c.js" async></script>
      </Head>
      

      <main className="container">
        <h1>Cadastro de Aluno</h1>
        <form className="cadastro-form" id="cadastroForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="endereco">Endereço</label>
              <input type="text" id="endereco" name="endereco" required />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" name="cpf" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="numero">Número de Telefone</label>
              <input type="tel" id="numero" name="numero" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tempo">Tempo de Assinatura</label>
              <select id="tempo" name="tempo_assinatura" required>
                <option value="1">1 mês</option>
                <option value="2">3 meses</option>
                <option value="3">1 ano</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="assinatura">Tipo de Assinatura</label>
              <select id="assinatura" name="tipo_assinatura" required>
            
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="modalidade_luta">Modalidade de Luta</label>
              <input type="text" id="modalidade_luta" name="modalidade_luta" />
            </div>
          </div>
          <button type="submit" className="btn-submit">Cadastrar Aluno</button>
        </form>
        
       

        {showPopup && (
          <div className="popup" id="successPopup">
            <div className="popup-content">
              <i className="fas fa-check-circle"></i>
              <h2>Cadastro Realizado!</h2>
              <p>O aluno foi cadastrado com sucesso.</p>
              <button className="btn-close" id="closePopup" onClick={handleClosePopup}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer/>
    </>
    
  );
};

export default CadastroAluno;
