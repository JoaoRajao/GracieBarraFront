import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { listarAvaliacoes, criarAvaliacao, atualizarAvaliacao, excluirAvaliacao } from '../utils/api';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '', email: '' });
  const [selectedReview, setSelectedReview] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [error, setError] = useState('');

  const fetchReviews = async () => {
    try {
      const data = await listarAvaliacoes();
      setReviews(data);
    } catch (err) {
      setError('Erro ao carregar avaliações.');
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleCreateReview = async (e) => {
    e.preventDefault();
    try {
      await criarAvaliacao(newReview);
      fetchReviews();
      setNewReview({ rating: 0, comment: '', email: '' });
    } catch (err) {
      setError('Erro ao enviar a avaliação.');
    }
  };

  const handleEditClick = (review) => {
    setSelectedReview(review);
    setEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await atualizarAvaliacao(selectedReview.id, selectedReview);
      fetchReviews();
      setEditModalOpen(false);
    } catch (err) {
      setError('Erro ao atualizar a avaliação.');
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await excluirAvaliacao(id);
      fetchReviews();
    } catch (err) {
      setError('Erro ao excluir a avaliação.');
    }
  };

  return (
    <>
      <Head>
        <title>Avaliações dos Clientes</title>
        <link rel="icon" type="image/png" href="/assets/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@600;700;800;900&family=Rubik:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
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
        <section className="reviews-section" style={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#1e2a33',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
        }}>
          <h1>Avaliações dos Clientes</h1>
          {error && <p className="error-message">{error}</p>}

          {/* Lista de Avaliações */}
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {reviews.map((review) => (
              <li key={review.id} style={{ marginBottom: '15px', textAlign: 'left' }}>
                <strong>Nota:</strong> {review.rating} <br />
                <strong>Email:</strong> {review.email} <br />
                <p>{review.comment}</p>
                <button onClick={() => handleEditClick(review)} style={{ marginRight: '10px', padding: '5px', cursor: 'pointer', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff' }}>
                  Editar
                </button>
                <button onClick={() => handleDeleteClick(review.id)} style={{ padding: '5px', cursor: 'pointer', borderRadius: '4px', backgroundColor: '#dc3545', color: '#fff' }}>
                  Excluir
                </button>
              </li>
            ))}
          </ul>

          {/* Formulário para Nova Avaliação */}
          <section className="new-review-section">
            <h2>Deixe Sua Avaliação</h2>
            <form onSubmit={handleCreateReview} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label>
                Nota:
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={newReview.email}
                  onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </label>
              <label>
                Comentário:
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                ></textarea>
              </label>
              <button type="submit" style={{
                padding: '10px',
                borderRadius: '4px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                cursor: 'pointer'
              }}>
                Enviar Avaliação
              </button>
            </form>
          </section>
        </section>

        {/* Modal para editar avaliação */}
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
              <h2>Editar Avaliação</h2>
              <form onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>
                  Nota:
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={selectedReview?.rating}
                    onChange={(e) => setSelectedReview({ ...selectedReview, rating: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    value={selectedReview?.email}
                    onChange={(e) => setSelectedReview({ ...selectedReview, email: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Comentário:
                  <textarea
                    value={selectedReview?.comment}
                    onChange={(e) => setSelectedReview({ ...selectedReview, comment: e.target.value })}
                    required
                  ></textarea>
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

export default CustomerReviews;