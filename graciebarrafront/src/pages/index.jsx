
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
 
  const workoutSchedule = {
    '08:00': { Monday: ['Jiu-Jitsu'], Tuesday: ['MMA'], Wednesday: ['Muay Thai'], Thursday: ['Boxe'], Friday: ['Jiu-Jitsu'], Saturday: ['CrossFit'] },
    '10:00': { Monday: ['Boxe'], Tuesday: ['Muay Thai'], Wednesday: ['Jiu-Jitsu'], Thursday: ['MMA'], Friday: ['CrossFit'], Saturday: ['Yoga'] },
    '14:00': { Monday: ['CrossFit'], Tuesday: ['Jiu-Jitsu'], Wednesday: ['Boxe'], Thursday: ['Muay Thai'], Friday: ['MMA'], Saturday: [] },
    '16:00': { Monday: ['Yoga'], Tuesday: ['CrossFit'], Wednesday: ['MMA'], Thursday: ['Jiu-Jitsu'], Friday: ['Boxe'], Saturday: [] },
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <>
      <Head>
        <title>Gracie Barra</title>
        <link rel="icon" type="image/png" href="/assets/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@600;700;800;900&family=Rubik:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main style={{ backgroundColor: '#151c23', color: '#fff', padding: '20px' }}>
        <section className="hero" style={{ padding: '40px 0', textAlign: 'center' }}>
          <div className="container">
            <h1 className="hero-title">Acompanhe seu progresso</h1>
            <p className="section-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsa doloribus impedit architecto.
            </p>
            <div className="hero-banner">
              <img src="/assets/images/gracie2.png" width="500" height="753" alt="hero banner" />
            </div>
          </div>
        </section>

        <section className="workout-schedule" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Horários das Modalidades de Treino</h2>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#1e2a33',
            borderRadius: '8px',
            overflow: 'hidden',
          }}>
            <thead>
              <tr style={{ backgroundColor: '#2b3a47' }}>
                <th style={{ padding: '10px', borderBottom: '1px solid #333' }}>Horário</th>
                {daysOfWeek.map((day) => (
                  <th key={day} style={{ padding: '10px', borderBottom: '1px solid #333' }}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(workoutSchedule).map((time) => (
                <tr key={time} style={{ borderBottom: '1px solid #333' }}>
                  <td style={{ padding: '10px' }}>{time}</td>
                  {daysOfWeek.map((day) => (
                    <td key={day} style={{ padding: '10px', textAlign: 'center' }}>
                      {workoutSchedule[time][day]?.length ? (
                        workoutSchedule[time][day].map((activity, index) => (
                          <div key={index}>{activity}</div>
                        ))
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
