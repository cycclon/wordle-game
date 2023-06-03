import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Wordle({ solution }) {
  const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys, handleInput, handleKeypadClick} = useWordle(solution);
  const [showModal, setShowModal] = useState(false);
  const [focused, setFocused] = useState(false)
  // const textInput = useRef(null)

  useEffect(() => {
    // window.addEventListener('keyup', handleKeyup);
    

    if(isCorrect) {
      // window.removeEventListener('keyup', handleKeyup);
      
      setTimeout(()=> {
        setShowModal(true)
      },2000)
      
    }

    if(turn>5) {
      // window.removeEventListener('keyup', handleKeyup);
      
      setTimeout(()=> {
        setShowModal(true)
      },2000)
    }

    return // () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect])

  useEffect(()=>{
    //console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  // useEffect(()=>{
  //   if(textInput.current) {
      
  //     textInput.current.addEventListener("focus", (event) => {        
  //       setFocused(true)
  //     })
  //     textInput.current.addEventListener("focusout", (event) => {        
  //       setFocused(false)
  //     })

  //     //textInput.current.focus()
  //   }
    
  //   // CLEANUP
  //   return () =>{
  //     textInput.current.removeEventListener("focus", (event) => {        
  //       setFocused(true)
  //     })
  //     textInput.current.removeEventListener("focusout", (event) => {        
  //       setFocused(false)
  //     })
  //   }
  // }, [])

  return (
    <div>
      {/* { focused ? '' : <label className='help'>Click below this text if you dont see a keyboard or your input does not compute</label>}
      <br /> */}
      {/* <input ref={textInput} className="texto" type="text" onKeyUp={handleKeyup} 
      onInput={handleInput} autoCorrect="off" autoCapitalize="off" spellCheck="false" /> */}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <Keypad usedKeys={usedKeys} handleKeypadClick={handleKeypadClick} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
}