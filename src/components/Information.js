import { useState, useRef, useEffect } from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

const InfoOptions = {Popup: 1, Fixed: 2}

export function Options() { return InfoOptions }


const Information = ( {options, messages} ) => {
  const [fixed, setFixed] = useState(false)
  const info = useRef()
  const infoIcon = useRef(null)
  
  useEffect(()=>{
    if(fixed) {
      info.current.className = "information visible"
      infoIcon.current.setAttribute('class', "information-icon show")
    }else {
      info.current.className = "information"
      infoIcon.current.setAttribute('class', "information-icon")
    }
  },[fixed])

  return (
    <div style={{verticalAlign: "top", position: "relative"}}>
      <InformationCircleIcon ref={infoIcon} className='information-icon' viewBox='0 0 24 24' 
      //title={`Click to ${fixed ? 'hide' : 'show'} information/tips`}
      // onMouseOver={(e)=>{if(info.current !== undefined){info.current.hidden = false}}} 
      // onMouseOut={(e)=>{if(info.current !== undefined){info.current.hidden = true}}}
      onClick={(e)=>setFixed(prev => !prev)}
      />
        {/* hidden={options !== InfoOptions.Fixed && !fixed} */}
        <>
          <ul ref={info} className='information' >
            {messages.map(({key, message})=>{return <li key={key} className='information'>{message}</li>})}
          </ul>
        </>

    </div>
  )
}

export default Information
