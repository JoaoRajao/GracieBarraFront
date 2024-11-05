import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header2';
import { listarUsuarios, cadastrarUsuario, atualizarUsuario, excluirUsuario } from '../utils/api';

const CadastroAluno = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [usuarioAtual, setUsuarioAtual] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await listarUsuarios();
        setUsuarios(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Erro ao listar usuários:', error);
      }
    };
    fetchUsuarios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dadosUsuario = {
      contato_emergencia_nome: e.target.contato_emergencia_nome?.value || '',
      contato_emergencia_telefone: e.target.contato_emergencia_telefone?.value || '',
      cpf: e.target.cpf?.value || '',
      email: e.target.email?.value || '',
      endereco: e.target.endereco?.value || '',
      modalidade_luta: e.target.modalidade_luta?.value || '',
      nome: e.target.nome?.value || '',
      telefone: e.target.numero?.value || '',
      tempo_assinatura: e.target.tempo_assinatura?.value || '',
      tipo_assinatura: e.target.tipo_assinatura?.value || '',
    };
    
    try {
      await cadastrarUsuario(dadosUsuario);
      setShowPopup(true);
      const data = await listarUsuarios();
      setUsuarios(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Head>
        <title>Cadastro de Aluno - Gracie Barra</title>
        <link rel="shortcut icon" href="/assets/images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

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
                <option value="Monthly">1 mês</option>
                <option value="Quarterly">3 meses</option>
                <option value="Yearly">1 ano</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="assinatura">Tipo de Assinatura</label>
              <input type="text" id="assinatura" name="tipo_assinatura" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="modalidade_luta">Modalidade de Luta</label>
              <input type="text" id="modalidade_luta" name="modalidade_luta" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contato_emergencia_nome">Contato Emergência Nome</label>
              <input type="text" id="contato_emergencia_nome" name="contato_emergencia_nome" />
            </div>
            <div className="form-group">
              <label htmlFor="contato_emergencia_telefone">Contato Emergência Telefone</label>
              <input type="tel" id="contato_emergencia_telefone" name="contato_emergencia_telefone" />
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

      <Footer />
    </>
  );
};

export default CadastroAluno;
