import React from 'react'

const getWins = () =>{
  let wins = parseInt(localStorage.getItem('wins'))
  if(isNaN(parseInt(localStorage.getItem('wins')))){
    wins = 0
  } else {
    wins = parseInt(localStorage.getItem('wins'))
  }
  return wins
}
const getLosses = () => {
  let losses = parseInt(localStorage.getItem('losses'))
  if(isNaN(parseInt(localStorage.getItem('losses')))){
    losses = 0
  } else {
    losses = parseInt(localStorage.getItem('losses'))
  }
  return losses
}

const WinRate = () => {
  return (
    <div style={{fontSize: "12px"}}>
      <label style={{color: "olive", fontWeight: "bold"}}>{getWins()}</label> wins and <label style={{color: "coral", fontWeight: "bold"}}>{getLosses()}</label> losses on this device.
      {(getWins()>0 || getLosses() > 0) && <><br /><label style={{color: "green", fontWeight: "bold", fontSize: "14px"}}>{Math.round(getWins()/(getWins()+getLosses())*100)}%</label> Win Rate</>}
    </div>
  )
}

export default WinRate
