type ManWordProps = {
  lettersGuessed: string[],
  wordGuessed: string,
  reveal: boolean
}
const ManText = ({lettersGuessed, wordGuessed, reveal = false}: ManWordProps ) => 
{  
  return (
    <div className='text'>
      {wordGuessed.split('').map((letter, index) => (
        <span className="each-letter" key={index}>
          <span style={{    
            visibility: 
            lettersGuessed.includes(letter) || reveal
            ? 
            'visible' 
            : 
            'hidden',
            color: !lettersGuessed.includes(letter) && reveal ?
            'red' : 'black'
                      }}
          >
            {letter}
          </span>
        </span>
      ) )}
    </div>
  );
};

export default ManText;