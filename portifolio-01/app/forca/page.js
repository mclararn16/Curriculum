'use client';

import { useState } from 'react';
import styles from '../page.module.css';

const WORDS = [
  { word: 'CLARA'},
  { word: 'REACT' },
  { word: 'JAVASCRIPT'},
  { word: 'COMPUTADOR'},
  { word: 'TECLADO'},
  { word: 'MOUSE' },
  { word: 'INTERNET' },
  { word: 'PROGRAMA' },
  { word: 'ALGORITMO' },
  { word: 'VARIAVEL' },
  { word: 'FUNCAO' },
  { word: 'ARQUIVO' },
  { word: 'NAVEGADOR'},
  { word: 'SERVIDOR' },
  { word: 'BANCO' },
  { word: 'PYTHON' },
  { word: 'ESTUDANTE' },
  { word: 'FACULDADE' },
  { word: 'RECIFE' },
  { word: 'PERNAMBUCO' },
  { word: 'PROJETO' },
  { word: 'ESTAGIO' },
  { word: 'FRONTEND' },
  { word: 'BACKEND' },
  { word: 'BANCODEDADOS' },
  { word: 'GITHUB' },
  { word: 'CELULAR'},
  { word: 'ARDUINO'},
  { word: 'ROBOTICA'},
  { word: 'FORCA'},
];


function sortearPalavra() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export default function Forca() {
  const [current, setCurrent] = useState(sortearPalavra);
  const [guesses, setGuesses] = useState([]);
  const { word } = current;
  const visibleWord = word.split('').map((letter) => guesses.includes(letter) ? letter : '_').join(' ');
  const wrongGuesses = guesses.filter((letter) => !word.includes(letter));
  const gameOver = wrongGuesses.length >= 6 || !visibleWord.includes('_');

  function guess(letter) {
    if (!guesses.includes(letter) && !gameOver) {
      setGuesses([...guesses, letter]);
    }
  }

  function restart() {
    setGuesses([]);
    setCurrent(sortearPalavra());
    setGuesses([]);
  }

  return (
    <main className={styles.contentPage}>
      <span className={styles.eyebrow}>Momento de brincar</span>
      <h1>Jogo da forca</h1>
      <section className={styles.gameSection}>
        <p className={styles.word}>{visibleWord}</p>
        <p>Erros: {wrongGuesses.length} de 6</p>
        <div className={styles.keyboard} aria-label="Letras disponíveis">
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
            <button key={letter} type="button" disabled={guesses.includes(letter) || gameOver} onClick={() => guess(letter)}>
              {letter}
            </button>
          ))}
        </div>
        {gameOver && <button className={styles.restartAction} type="button" onClick={restart}>Jogar novamente</button>}
      </section>
    </main>
  );
}