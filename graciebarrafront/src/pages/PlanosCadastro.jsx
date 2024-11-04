import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header2';

const PlanosCadastro = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  const handleEditToggle = () => {
    setShowEditModal(!showEditModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Função para cadastrar o plano
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Função para salvar alterações
    handleEditToggle();
  };

  return (
    <>
      <Head>
        <title>Cadastro de Planos - Gracie Barra</title>
        <link rel="shortcut icon" href="/assets/images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a81368914c.js" async></script>
      </Head>
      <Header />
      <main className="container">
        <h1>Cadastro e Gerenciamento de Planos</h1>
        <button onClick={handleFormToggle} className="btn-action">
          Cadastrar Novo Plano
        </button>

        {showForm && (
          <div className="form-container">
            <form className="plan-form" id="planForm" onSubmit={handleSubmit}>
              <h2>Cadastrar Novo Plano</h2>
              <div className="form-group">
                <label htmlFor="categoria">Categoria:</label>
                <input type="text" id="categoria" name="categoria" required />
              </div>
              <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="tipo">Tipo de Plano:</label>
                <input type="text" id="tipo" name="tipo" required />
              </div>
              <div className="form-group">
                <label htmlFor="preco">Preço:</label>
                <input type="number" id="preco" name="preco" step="0.01" required />
              </div>
              <div className="form-group">
                <label htmlFor="taxaMatricula">Taxa de Matrícula:</label>
                <input type="number" id="taxaMatricula" name="taxaMatricula" step="0.01" required />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  Cadastrar Plano
                </button>
                <button type="button" className="btn-cancel" onClick={handleFormToggle}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="plans-list">
          <h2>Planos Cadastrados</h2>
          <table id="plansTable">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Preço</th>
                <th>Taxa de Matrícula</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody id="plansTableBody">
              {/* Planos cadastrados vão ser listados aqui */}
            </tbody>
          </table>
        </div>

        <Link href="/adminPanel">
          voltar
        </Link>

        {showEditModal && (
          <div className="modal" id="editModal">
            <div className="modal-content">
              <h2>Editar Plano</h2>
              <form id="editForm" onSubmit={handleEditSubmit}>
                <input type="hidden" id="editId" />
                <div className="form-group">
                  <label htmlFor="editCategoria">Categoria:</label>
                  <input type="text" id="editCategoria" required />
                </div>
                <div className="form-group">
                  <label htmlFor="editNome">Nome:</label>
                  <input type="text" id="editNome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="editTipo">Tipo de Plano:</label>
                  <input type="text" id="editTipo" required />
                </div>
                <div className="form-group">
                  <label htmlFor="editPreco">Preço:</label>
                  <input type="number" id="editPreco" step="0.01" required />
                </div>
                <div className="form-group">
                  <label htmlFor="editTaxaMatricula">Taxa de Matrícula:</label>
                  <input type="number" id="editTaxaMatricula" step="0.01" required />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-submit">
                    Salvar Alterações
                  </button>
                  <button type="button" className="btn-cancel" onClick={handleEditToggle}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default PlanosCadastro;
