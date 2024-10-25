
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/assets/images/logo.png" />
        {/* <link rel="stylesheet" href="/assets/css/style.css" /> */}
        
        {/* 
        <link rel="stylesheet" href="/assets/css/exibirAlunos.css" />
        <link rel="stylesheet" href="/assets/css/adminPanel.css" /> */}
         {/* <link rel="stylesheet" href="/assets/css/login.module.css" />  */}
        {/* <link rel="stylesheet" href="/assets/css/cadastroAluno.css" />
       
        <link rel="stylesheet" href="/assets/css/pagamentoAluno.css" />
        <link rel="stylesheet" href="/assets/css/pagamentoAlunoIndividual.css" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@600;700;800;900&family=Rubik:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
