//! Esercizio

/* Prendendo ispirazione dal layout fornito in allegato, creare la pagina iniziale di un blog con un post inserito al suo interno. 

Assicuratevi di suddividere il layout in componenti appropriati.

Step per creare il progetto:

    Creiamo un progetto React utilizzando vite npm create vite@latest .
    Installiamo le dipendenze npm install
    Lanciamo il server di sviluppo npm run dev
    Creiamo una cartella components nella quale inseriremo i nostri componenti

BONUS:

    Invece di utilizzare un unico file index.css separiamo lo style utilizzando i CSS Modules */

import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
