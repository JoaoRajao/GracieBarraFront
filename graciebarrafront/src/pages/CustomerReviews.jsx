
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [error, setError] = useState('');

 
  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/rating/list');
      setReviews(response.data);
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
      await axios.post('/api/rating/new', newReview);
      fetchReviews();
      setNewReview({ rating: 0, comment: '' });
    } catch (err) {
      setError('Erro ao enviar a avaliação.');
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
      
      {/* Inclui o Header */}
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
                <strong>Nota:</strong> {review.rating}
                <p>{review.comment}</p>
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
      </main>

      {/* Inclui o Footer */}
      <Footer />
    </>
  );
};

export default CustomerReviews;
