import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header2';
import Footer from '../components/Footer';
import { listarUsuarios, atualizarUsuario, excluirUsuario } from '../utils/api';

const ExibirAlunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAluno, setSelectedAluno] = useState(null);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const data = await listarUsuarios();
        setAlunos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Erro ao listar alunos:', error);
      }
    };
    fetchAlunos();
  }, []);

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

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const updatedAluno = {
      ...selectedAluno,
      nome: e.target.editNome.value,
      cpf: e.target.editCpf.value,
      telefone: e.target.editNumero.value,
      email: e.target.editEmail.value,
    };

    try {
      await atualizarUsuario(selectedAluno.id, updatedAluno);
      setAlunos(alunos.map((aluno) => (aluno.id === selectedAluno.id ? updatedAluno : aluno)));
      setSuccessModalOpen(true);
      closeModals();
    } catch (error) {
      console.error('Erro ao atualizar aluno:', error);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await excluirUsuario(selectedAluno.id);
      setAlunos(alunos.filter((aluno) => aluno.id !== selectedAluno.id));
      setSuccessModalOpen(true);
      closeModals();
    } catch (error) {
      console.error('Erro ao excluir aluno:', error);
    }
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
            {alunos
              .filter((aluno) =>
                aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((aluno) => (
                <tr key={aluno.id}>
                  <td>{aluno.id}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.cpf}</td>
                  <td>{aluno.telefone}</td>
                  <td>{aluno.email}</td>
                  <td>{aluno.tempo_assinatura}</td>
                  <td>{aluno.tipo_assinatura}</td>
                  <td>
                    <button onClick={() => handleEditClick(aluno)}>Editar</button>
                    <button onClick={() => handleDeleteClick(aluno)}>Excluir</button>
                  </td>
                </tr>
              ))}
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
              <div className="form-group">
                <label htmlFor="editNome">Nome:</label>
                <input
                  type="text"
                  id="editNome"
                  defaultValue={selectedAluno?.nome}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="editCpf">CPF:</label>
                <input type="text" id="editCpf" defaultValue={selectedAluno?.cpf} required />
              </div>
              <div className="form-group">
                <label htmlFor="editNumero">Número:</label>
                <input type="tel" id="editNumero" defaultValue={selectedAluno?.telefone} required />
              </div>
              <div className="form-group">
                <label htmlFor="editEmail">E-mail:</label>
                <input type="email" id="editEmail" defaultValue={selectedAluno?.email} required />
              </div>
              <button type="submit" className="btn-save">Salvar Alterações</button>
              <button type="button" className="btn-cancel" onClick={closeModals}>
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
            <button className="btn-delete" onClick={handleDeleteConfirm}>
              Sim, Excluir
            </button>
            <button className="btn-cancel" onClick={closeModals}>
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
            <p>Ação realizada com sucesso.</p>
            <i className="fas fa-check-circle"></i>
            <button className="btn-close" onClick={closeModals}>
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
