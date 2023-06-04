import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from 'react'

const Rules = () => {
  const [ showRules, setShowRules ] = useState(false)
  const rules = useRef(null)
  const rulesTitle = useRef(null)
  const rulesIcon = useRef(null)

  useEffect(()=>{
    if(showRules) {
      rules.current.className = "rules show"
      rulesTitle.current.className = "rules-title show"
      rulesIcon.current.setAttribute('class', "rules-icon show")
    }else {
      rules.current.className = "rules"
      rulesTitle.current.className = "rules-title"
      rulesIcon.current.setAttribute('class', "rules-icon")
    }
  },[showRules])

  return (
    <div className='rules-container'>
      <CheckCircleIcon ref={rulesIcon} className='rules-icon' onClick={(e)=>{setShowRules((prev)=>!prev)}}/>
      <label ref={rulesTitle} className='rules-title'>Rules</label>
      <span ref={rules} className='rules'>: spanish nouns; no plurals; no names</span>
    </div>
  )
}

export default Rules
