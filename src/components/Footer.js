import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      {/* <img style={{display: "inline-block"}} src="https://raw.githubusercontent.com/cycclon/wordle-game/master/assets/PRS-Small.png?raw=true" alt="" /> */}
      <span style={{display: "inline-block", marginLeft: '5px'}}> 
        &#169; Copyright Engr. Pedro R. Spidalieri - 2023
        <br />
        If you like this app, consider a&nbsp;
        <a href='https://www.paypal.com/donate/?hosted_button_id=YV3874VHEJ5R8'>donation!</a>
      </span>
      <a target='_blank' href="https://github.com/cycclon/wordle-game">
        <img style={{marginLeft: "20px", marginTop: "4px", height: "24px"}}
          src="https://raw.githubusercontent.com/cycclon/wordle-game/master/assets/GitHub.png" alt="Colaborate in Github" />
      </a>
    </div>
  )
}

export default Footer
