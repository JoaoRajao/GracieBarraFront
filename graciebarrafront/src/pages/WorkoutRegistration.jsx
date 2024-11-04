// src/pages/WorkoutRegistration.jsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header2';
import Footer from '../components/Footer';
import axios from 'axios';

const WorkoutRegistration = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({ day: '', type: '', time: '' });
  const [error, setError] = useState('');

  
  const fetchWorkouts = async () => {
    try {
      const response = await axios.get('/api/workout/list');
      setWorkouts(response.data);
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
      await axios.post('/api/workout/new', newWorkout);
      fetchWorkouts();
      setNewWorkout({ day: '', type: '', time: '' });
    } catch (err) {
      setError('Erro ao registrar o treino.');
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
              <li key={workout.id} style={{ marginBottom: '15px', textAlign: 'left' }}>
                <strong>Dia:</strong> {workout.day} <br />
                <strong>Modalidade:</strong> {workout.type} <br />
                <strong>Horário:</strong> {workout.time}
              </li>
            ))}
          </ul>

          {/* Formulário para Novo Treino */}
          <section className="new-workout-section">
            <h2>Registrar Novo Treino</h2>
            <form onSubmit={handleCreateWorkout} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label>
                Dia:
                <input
                  type="text"
                  value={newWorkout.day}
                  onChange={(e) => setNewWorkout({ ...newWorkout, day: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <label>
                Modalidade:
                <input
                  type="text"
                  value={newWorkout.type}
                  onChange={(e) => setNewWorkout({ ...newWorkout, type: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <label>
                Horário:
                <input
                  type="text"
                  value={newWorkout.time}
                  onChange={(e) => setNewWorkout({ ...newWorkout, time: e.target.value })}
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
      </main>

      <Footer />
    </>
  );
};

export default WorkoutRegistration;
