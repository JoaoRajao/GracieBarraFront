import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header2';
import Footer from '../components/Footer';

const ExibirAlunos = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAluno, setSelectedAluno] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEditClick = (aluno) => {
    setSelectedAluno(aluno);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (aluno) => {
    setSelectedAluno(aluno);
    setDeleteModalOpen(true);
  };

  const closeModals = () => {
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setSuccessModalOpen(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar alterações
    setSuccessModalOpen(true);
    closeModals();
  };

  const handleDeleteConfirm = () => {
    // Lógica para confirmar exclusão
    setSuccessModalOpen(true);
    closeModals();
  };

  return (
    <>
   
      <Head>
        <title>Exibir Alunos - Gracie Barra</title>
        <link rel="shortcut icon" href="/assets/images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a81368914c.js" async></script>
      </Head>

      <Header />

      <main className="container">
        <h1>Lista de Alunos</h1>
        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar aluno..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button id="searchButton" className="btn-search">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <table id="alunosTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Número</th>
              <th>E-mail</th>
              <th>Tempo Assinatura</th>
              <th>Tipo Assinatura</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody id="alunosTableBody">
           
            <tr>
              <td>1</td>
              <td>João Vitor</td>
              <td>000.000.000-00</td>
              <td>(31) 99999-9999</td>
              <td>joao@example.com</td>
              <td>12 meses</td>
              <td>Premium</td>
              <td>
                <button onClick={() => handleEditClick({ id: 1, nome: 'João Vitor' })}>
                  Editar
                </button>
                <button onClick={() => handleDeleteClick({ id: 1, nome: 'João Vitor' })}>
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <a href="/adminPanel" className="btn-voltar">Voltar ao Menu</a>
      </main>

      {/* Modal para editar aluno */}
      {editModalOpen && (
        <div id="editModal" className="modal">
          <div className="modal-content">
            <h2>Editar Aluno</h2>
            <form id="editForm" onSubmit={handleEditSubmit}>
              <input type="hidden" id="editId" value={selectedAluno?.id} />
              <div className="form-group">
                <label htmlFor="editNome">Nome:</label>
                <input type="text" id="editNome" defaultValue={selectedAluno?.nome} required />
              </div>
              <div className="form-group">
                <label htmlFor="editCpf">CPF:</label>
                <input type="text" id="editCpf" required />
              </div>
              <div className="form-group">
                <label htmlFor="editNumero">Número:</label>
                <input type="tel" id="editNumero" required />
              </div>
              <div className="form-group">
                <label htmlFor="editEmail">E-mail:</label>
                <input type="email" id="editEmail" required />
              </div>
              <button type="submit" className="btn-save">Salvar Alterações</button>
              <button type="button" id="cancelEdit" className="btn-cancel" onClick={closeModals}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal para confirmar exclusão */}
      {deleteModalOpen && (
        <div id="deleteModal" className="modal">
          <div className="modal-content">
            <h2>Confirmar Exclusão</h2>
            <p>Tem certeza que deseja excluir este aluno?</p>
            <button id="confirmDelete" className="btn-delete" onClick={handleDeleteConfirm}>
              Sim, Excluir
            </button>
            <button id="cancelDelete" className="btn-cancel" onClick={closeModals}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Modal de sucesso */}
      {successModalOpen && (
        <div id="successModal" className="modal">
          <div className="modal-content">
            <h2>Sucesso!</h2>
            <p id="successMessage">Ação realizada com sucesso.</p>
            <i className="fas fa-check-circle"></i>
            <button id="closeSuccessModal" className="btn-close" onClick={closeModals}>
              Fechar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ExibirAlunos;
