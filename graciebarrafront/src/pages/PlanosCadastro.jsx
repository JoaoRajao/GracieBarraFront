import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { listarPlanos, cadastrarPlano, atualizarPlano, excluirPlano } from '../utils/api';

const PlanosCadastro = () => {
  const [planos, setPlanos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [planoAtual, setPlanoAtual] = useState(null);

  useEffect(() => {
    const fetchPlanos = async () => {
      try {
        const data = await listarPlanos();
        setPlanos(data);
      } catch (error) {
        console.error('Erro ao buscar planos:', error);
      }
    };
    fetchPlanos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dadosPlano = {
      categoria: e.target.categoria.value,
      nome: e.target.nome.value,
      tipo: e.target.tipo.value,
      preco: e.target.preco.value,
      taxaMatricula: e.target.taxaMatricula.value,
    };
    
    try {
      await cadastrarPlano(dadosPlano);
      setShowForm(false);
      const data = await listarPlanos();
      setPlanos(data);
    } catch (error) {
      console.error('Erro ao cadastrar plano:', error);
    }
  };

  const handleEdit = (plano) => {
    setPlanoAtual(plano);
    setShowEditModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const dadosPlano = {
      categoria: e.target.editCategoria.value,
      nome: e.target.editNome.value,
      tipo: e.target.editTipo.value,
      preco: e.target.editPreco.value,
      taxaMatricula: e.target.editTaxaMatricula.value,
    };

    try {
      await atualizarPlano(planoAtual.id, dadosPlano);
      setShowEditModal(false);
      const data = await listarPlanos();
      setPlanos(data);
    } catch (error) {
      console.error('Erro ao atualizar plano:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await excluirPlano(id);
      const data = await listarPlanos();
      setPlanos(data);
    } catch (error) {
      console.error('Erro ao excluir plano:', error);
    }
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
      </Head>

      <main className="container">
        <h1>Cadastro e Gerenciamento de Planos</h1>
        <button onClick={() => setShowForm(!showForm)} className="btn-action">
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
                <input type="number" id="tipo" name="tipo" required />
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
                <button type="button" className="btn-cancel" onClick={() => setShowForm(false)}>
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
            <tbody>
              {planos.map((plano) => (
                <tr key={plano.id}>
                  <td>{plano.category}</td>
                  <td>{plano.name}</td>
                  <td>{plano.plan_type}</td>
                  <td>{plano.price}</td>
                  <td>{plano.registration_fee}</td>
                  <td>
                    <button onClick={() => handleEdit(plano)} className="btn">Editar</button>
                    <button onClick={() => handleDelete(plano.id)} className="btn btn-delete">Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link href="/adminPanel">
          Voltar ao Menu
        </Link>

        {showEditModal && (
          <div className="modal" id="editModal">
            <div className="modal-content">
              <h2>Editar Plano</h2>
              <form id="editForm" onSubmit={handleEditSubmit}>
                <div className="form-group">
                  <label htmlFor="editCategoria">Categoria:</label>
                  <input type="text" id="editCategoria" name="editCategoria" defaultValue={planoAtual.category} required />
                </div>
                <div className="form-group">
                  <label htmlFor="editNome">Nome:</label>
                  <input type="text" id="editNome" name="editNome" defaultValue={planoAtual.name} required />
                </div>
                <div className="form-group">
                  <label htmlFor="editTipo">Tipo de Plano:</label>
                  <input type="number" id="editTipo" name="editTipo" defaultValue={planoAtual.plan_type} required />
                </div>
                <div className="form-group">
                  <label htmlFor="editPreco">Preço:</label>
                  <input type="number" id="editPreco" name="editPreco" defaultValue={planoAtual.price} step="0.01" required />
                </div>
                <div className="form-group">
                  <label htmlFor="editTaxaMatricula">Taxa de Matrícula:</label>
                  <input type="number" id="editTaxaMatricula" name="editTaxaMatricula" defaultValue={planoAtual.registration_fee} step="0.01" required />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-submit">
                    Salvar Alterações
                  </button>
                  <button type="button" className="btn-cancel" onClick={() => setShowEditModal(false)}>
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
