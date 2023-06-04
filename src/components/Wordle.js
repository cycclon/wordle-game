import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';
import Information, { Options } from './Information'
import Rules from './Rules';

export default function Wordle({ solution }) {
  const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys, handleInput, handleKeypadClick} = useWordle(solution);
  const [showModal, setShowModal] = useState(false);
  const [focused, setFocused] = useState(false)
  const info = [
    {
      key: 1,
      message: 'The objective of the game is to guess a secret random word in 6 guesses or less, using a color scheme as hints for each letter'
    },
    {
      key: 2,
      message: 'Touch (mobile) or click (pc) on the letters in the keypad to add them to the board'
    },
    {
      key: 3,
      message: 'Once you complete a line of letters press "Enter" key to check against the secret word'
    },
    {
      key: 4,
      message: `Depending whether each letter matches the letters in the secret word, youll see three different colors: 
      Grey: the letter is not in the secret word
      Yellow: the letter is in the secret word but in a different possition
      Green: the letter is in the secret word and in the correct possition`
    },
    {
      key: 5,
      message: 'The keypad will be highlighted with these colors accorgingly'
    },
  ]
  // const textInput = useRef(null)

  useEffect(() => {
    if(isCorrect) {      
      setTimeout(()=> {
        setShowModal(true)
      },2000)      
    }

    if(turn>5) {      
      setTimeout(()=> {
        setShowModal(true)
      },2000)
    }

    return 
  }, [handleKeyup, isCorrect])

  useEffect(()=>{

  }, [guesses, turn, isCorrect])

  return (
    <div>
      <Information options={Options().Popup} messages={info}/>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <Rules />
      <Keypad usedKeys={usedKeys} handleKeypadClick={handleKeypadClick} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
}