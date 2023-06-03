import React, { useEffect, useState } from 'react'


export default function Keypad({ usedKeys, handleKeypadClick }) {
  const [letters, setLetters] = useState(null);


  useEffect(()=>{
    //const API_URL = 'localhost:3001'
    const API_URL = 'https://wordleapi.glitch.me'
    fetch(`${API_URL}/letters`)
    .then(res => res.json())
    .then(json=>{
      setLetters(json)
    })
  }, []) 

  return (
    <div className="keypad">
      {letters && letters.map((l)=>{
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color} 
          onClick={(e)=>{handleKeypadClick(l.key)}}>{l.key}</div>
        )
      })}
      <div key="Enter" className='enter'
      onClick={(e)=>{handleKeypadClick("Enter")}}>Enter</div>
      <div key="Backspace" className='backspace'
      onClick={(e)=>{handleKeypadClick("Backspace")}}>&lt;&lt;</div>
    </div>
  )
}