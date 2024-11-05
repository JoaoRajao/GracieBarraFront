import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header2';
import Footer from '../components/Footer';
import { listarTreinos, criarTreino, atualizarTreino, excluirTreino } from '../utils/api';

const WorkoutRegistration = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({ color: '', time_start: '', time_end: '', title: '' });
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [error, setError] = useState('');

  const fetchWorkouts = async () => {
    try {
      const data = await listarTreinos();
      setWorkouts(data);
    } catch (err) {
      setError('Erro ao carregar os treinos.');
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleCreateWorkout = async (e) => {
    e.preventDefault();
    try {
      await criarTreino(newWorkout);
      fetchWorkouts();
      setNewWorkout({ color: '', time_start: '', time_end: '', title: '' });
    } catch (err) {
      setError('Erro ao registrar o treino.');
    }
  };

  const handleEditClick = (workout) => {
    setSelectedWorkout(workout);
    setEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await atualizarTreino(selectedWorkout.id, selectedWorkout);
      fetchWorkouts();
      setEditModalOpen(false);
    } catch (err) {
      setError('Erro ao atualizar o treino.');
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await excluirTreino(id);
      fetchWorkouts();
    } catch (err) {
      setError('Erro ao excluir o treino.');
    }
  };

  return (
    <>
      <Head>
        <title>Registro de Treinos</title>
      </Head>
      
      <Header />

      <main style={{
        backgroundColor: '#151c23',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <section className="workouts-section" style={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#1e2a33',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
        }}>
          <h1>Registro de Treinos</h1>
          {error && <p className="error-message">{error}</p>}

          {/* Lista de Treinos */}
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {workouts.map((workout) => (
              <li key={workout.id} style={{ marginBottom: '15px', textAlign: 'left', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                <strong>Título:</strong> {workout.title} <br />
                <strong>Início:</strong> {new Date(workout.time_start).toLocaleString()} <br />
                <strong>Fim:</strong> {new Date(workout.time_end).toLocaleString()} <br />
                <strong>Cor:</strong> {workout.color} <br />
                <button onClick={() => handleEditClick(workout)} style={{ marginRight: '10px', padding: '5px', cursor: 'pointer', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff' }}>
                  Editar
                </button>
                <button onClick={() => handleDeleteClick(workout.id)} style={{ padding: '5px', cursor: 'pointer', borderRadius: '4px', backgroundColor: '#dc3545', color: '#fff' }}>
                  Excluir
                </button>
              </li>
            ))}
          </ul>

          {/* Formulário para Novo Treino */}
          <section className="new-workout-section">
            <h2>Registrar Novo Treino</h2>
            <form onSubmit={handleCreateWorkout} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label>
                Título:
                <input
                  type="text"
                  value={newWorkout.title}
                  onChange={(e) => setNewWorkout({ ...newWorkout, title: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <label>
                Início:
                <input
                  type="datetime-local"
                  value={newWorkout.time_start}
                  onChange={(e) => setNewWorkout({ ...newWorkout, time_start: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <label>
                Fim:
                <input
                  type="datetime-local"
                  value={newWorkout.time_end}
                  onChange={(e) => setNewWorkout({ ...newWorkout, time_end: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <label>
                Cor:
                <input
                  type="text"
                  value={newWorkout.color}
                  onChange={(e) => setNewWorkout({ ...newWorkout, color: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <button type="submit" style={{
                padding: '10px',
                borderRadius: '4px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                cursor: 'pointer'
              }}>
                Registrar Treino
              </button>
            </form>
          </section>
        </section>

        {/* Modal para editar treino */}
        {editModalOpen && (
          <div className="modal" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className="modal-content" style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '400px',
              width: '100%'
            }}>
              <h2>Editar Treino</h2>
              <form onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>
                  Título:
                  <input
                    type="text"
                    value={selectedWorkout?.title}
                    onChange={(e) => setSelectedWorkout({ ...selectedWorkout, title: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Início:
                  <input
                    type="datetime-local"
                    value={selectedWorkout?.time_start}
                    onChange={(e) => setSelectedWorkout({ ...selectedWorkout, time_start: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Fim:
                  <input
                    type="datetime-local"
                    value={selectedWorkout?.time_end}
                    onChange={(e) => setSelectedWorkout({ ...selectedWorkout, time_end: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Cor:
                  <input
                    type="text"
                    value={selectedWorkout?.color}
                    onChange={(e) => setSelectedWorkout({ ...selectedWorkout, color: e.target.value })}
                    required
                  />
                </label>
                <button type="submit" style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
                  Salvar Alterações
                </button>
                <button type="button" onClick={() => setEditModalOpen(false)} style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#6c757d', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
                  Cancelar
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default WorkoutRegistration;
