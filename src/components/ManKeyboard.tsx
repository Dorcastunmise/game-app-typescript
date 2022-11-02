import styles from '../keyboard.module.css';
const KEYS = ["a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
];
type KeyboardProps = {
  disabled?: boolean, 
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetter: (letter: string) => void
}
const ManKeyboard = ({ activeLetters, inactiveLetters, disabled = false, addGuessedLetter }: KeyboardProps) => 
{
  return (
    <div className="keyboard">
        {KEYS.map(key => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);

            return (
            <button 
            key={key} 
            className={`${styles.button} 
            ${isActive ? styles.active : ""}
            ${isInactive ? styles.inactive : ""}`}
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || isActive || disabled}
            >
              {key}
            </button>
            )
        })}
    </div>
  );
};

export default ManKeyboard;