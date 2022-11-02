import React from 'react';
import word from './words.json';
import './App.css';
import ManDrawing from './components/ManDrawing';
import ManText from './components/ManText';
import ManKeyboard from './components/ManKeyboard';

function getWord() {
  return word[Math.floor(Math.random() * word.length)];
}

function App() {
  const [wordGuessed, setWordGuessed] = React.useState(getWord);
  const [lettersGuessed, setLettersGuessed ] = React.useState<string[]>([]);
  const incorrectLetters = lettersGuessed.filter(
    letter => !wordGuessed.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordGuessed
  .split('')
  .every(letter => lettersGuessed.includes(letter));

  const addLettersGuessed = React.useCallback((letter: string) =>
    {
    if(lettersGuessed.includes(letter) || isLoser || isWinner) 
    return

      setLettersGuessed(currentLetters =>
        [...currentLetters, letter]);
    }, [lettersGuessed, isWinner, isLoser]
  );
  
    React.useEffect(() => {
      const handler = (e: KeyboardEvent) => {
          const key = e.key;
          if (!key.match(/^[a-z]$/)) return 
          e.preventDefault();
          addLettersGuessed(key);
      };
      document.addEventListener('keypress', handler)
      
      return () => {
        document.removeEventListener('keypress', handler)
      }
}, []);
    React.useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key;
        if(key !== 'Enter') return

        e.preventDefault();
        setLettersGuessed([]);
        setWordGuessed(getWord());
    };
    document.addEventListener('keypress', handler)
    
    return () => {
      document.removeEventListener('keypress', handler)
    }
    }, []);

  return (
    <div className="App">
      <div className='response'>
        {isWinner && "You Won gee!! Refresh to try again"} 
        {isLoser && "You lost eje....try again"}
      </div>
      <ManDrawing guessAmount={incorrectLetters.length}/>
      <ManText reveal={isLoser} lettersGuessed={lettersGuessed} wordGuessed={wordGuessed}/>
      <div className='stretch'>
      <ManKeyboard 
      disabled={isWinner || isLoser}
      activeLetters={lettersGuessed.filter(letter => wordGuessed.includes(letter))}
      inactiveLetters={incorrectLetters}
      addGuessedLetter={addLettersGuessed}/>
      </div>
    </div>
  )
}

export default App;
