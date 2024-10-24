import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PlanosCadastro = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [plans, setPlans] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editPlan, setEditPlan] = useState(null);

  const toggleForm = () => setFormVisible(!formVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlan = {
      categoria: e.target.categoria.value,
      nome: e.target.nome.value,
      tipo: e.target.tipo.value,
      preco: e.target.preco.value,
      taxaMatricula: e.target.taxaMatricula.value,
    };
    setPlans([...plans, newPlan]);
    e.target.reset();
    toggleForm();
  };

  const handleEdit = (plan) => {
    setEditPlan(plan);
    setEditMode(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedPlans = plans.map((plan) =>
      plan.nome === editPlan.nome
        ? {
            ...editPlan,
            categoria: e.target.editCategoria.value,
            nome: e.target.editNome.value,
            tipo: e.target.editTipo.value,
            preco: e.target.editPreco.value,
            taxaMatricula: e.target.editTaxaMatricula.value,
          }
        : plan
    );
    setPlans(updatedPlans);
    setEditMode(false);
    setEditPlan(null);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditPlan(null);
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
        <button id="openFormBtn" className="btn-action" onClick={toggleForm}>
          {formVisible ? 'Fechar Formulário' : 'Cadastrar Novo Plano'}
        </button>

        {formVisible && (
          <div id="formContainer" className="form-container">
            <form id="planForm" className="plan-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="btn-submit">Cadastrar Plano</button>
                <button type="button" id="cancelForm" className="btn-cancel" onClick={toggleForm}>
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
              {plans.length > 0 ? (
                plans.map((plan, index) => (
                  <tr key={index}>
                    <td>{plan.categoria}</td>
                    <td>{plan.nome}</td>
                    <td>{plan.tipo}</td>
                    <td>{plan.preco}</td>
                    <td>{plan.taxaMatricula}</td>
                    <td>
                      <button onClick={() => handleEdit(plan)}>Editar</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Nenhum plano cadastrado</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <a href="/adminPanel" className="btn-voltar">Voltar ao Menu</a>

        {editMode && (
          <div id="editModal" className="modal">
            <div className="modal-content">
              <h2>Editar Plano</h2>
              <form id="editForm" onSubmit={handleEditSubmit}>
                <input type="hidden" id="editId" value={editPlan?.id} />
                <div className="form-group">
                  <label htmlFor="editCategoria">Categoria:</label>
                  <input type="text" id="editCategoria" defaultValue={editPlan?.categoria} required />
                </div>
                <div className="form-group">
                  <label htmlFor="editNome">Nome:</label>
                  <input type="text" id="editNome" defaultValue={editPlan?.nome} required />
                </div>
                <div className="form-group">
                  <label htmlFor="editTipo">Tipo de Plano:</label>
                  <input type="text" id="editTipo" defaultValue={editPlan?.tipo} required />
                </div>
                <div className="form-group">
                  <label htmlFor="editPreco">Preço:</label>
                  <input type="number" id="editPreco" defaultValue={editPlan?.preco} step="0.01" required />
                </div>
                <div className="form-group">
                  <label htmlFor="editTaxaMatricula">Taxa de Matrícula:</label>
                  <input type="number" id="editTaxaMatricula" defaultValue={editPlan?.taxaMatricula} step="0.01" required />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-submit">Salvar Alterações</button>
                  <button type="button" id="cancelEdit" className="btn-cancel" onClick={handleCancelEdit}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default PlanosCadastro;
