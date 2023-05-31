import React, { useEffect, useState } from 'react'

export default function Modal({isCorrect, turn, solution}) {

  const [ flag, setFlag] = useState(false)

  useEffect(()=>{

    if(isCorrect && !flag) {
      let wins = parseInt(localStorage.getItem('wins'))
      if(isNaN(parseInt(localStorage.getItem('wins')))){
        wins = 0
      } else {
        wins = parseInt(localStorage.getItem('wins'))
      }
      wins += 1
      localStorage.setItem('wins', wins)
      setFlag(true)
    }else if(!isCorrect && !flag) {
      let losses = parseInt(localStorage.getItem('losses'))
      if(isNaN(parseInt(localStorage.getItem('losses')))){
        losses = 0
      } else {
        losses = parseInt(localStorage.getItem('losses'))
      }
      losses +=1
      localStorage.setItem('losses', losses)
      setFlag(true)
    }
  },[])

  return (
    <div className='modal'>
      {
        isCorrect && (
          <div>
            <h1>You Win!</h1>
            <p className='solution'>{solution}</p>
            <p>You found the solution in {turn} guesses :)</p>
          </div>
        )
      }
      {
        !isCorrect && (
          <div>
            <h1>Nevermind!</h1>
            <p className='solution'>{solution}</p>
            <p>Better luck next time :)</p>
          </div>
        )
      }
      <button onClick={(e)=>window.location.reload(true)} >Again!</button>
    </div>
  )
}