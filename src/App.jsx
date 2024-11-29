//! Giorno 1

/* Prendendo ispirazione dal layout fornito in allegato, creare la pagina iniziale di un blog con un post inserito al suo interno. 

Assicuratevi di suddividere il layout in componenti appropriati.

Step per creare il progetto:

    Creiamo un progetto React utilizzando vite npm create vite@latest .
    Installiamo le dipendenze npm install
    Lanciamo il server di sviluppo npm run dev
    Creiamo una cartella components nella quale inseriremo i nostri componenti

BONUS:

    Invece di utilizzare un unico file index.css separiamo lo style utilizzando i CSS Modules */

//! Giorno 2

/* Partendo dall'esercizio di ieri e dall'array di posts allegato, 
l'obiettivo è creare dinamicamente gli articoli all'interno della pagina.
 
I dati relativi a ciascun post dovranno essere passati come props ai componenti.
 
 Ogni post ha una proprietà published, 
 e gli articoli devono essere mostrati solo se questa proprietà è impostata su true.

Assegnate colori diversi ai tag dei posts, ad esempio: verde per html, rosa per css, etc…

Se un post non ha un'immagine, inserite un'immagine di default, 
potete utilizzare uno dei tanti servizi online come:

    https://placehold.co/
    https://picsum.photos/

Aggiungi una sezione nella pagina in cui mostrare la lista dei tag distinti senza ripetizioni. */

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
