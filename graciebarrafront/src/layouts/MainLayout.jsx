
import React from 'react';
import Head from 'next/head'; 
import Header from '../components/Header';
import Footer from '../components/Footer';


const MainLayout = ({ children }) => (
  <>
    <Head>
      <title>Gracie Barra</title>
      <link rel="icon" href="/assets/images/logo.png" />
      
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
