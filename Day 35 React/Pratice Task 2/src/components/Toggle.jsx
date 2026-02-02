import React, { useState } from 'react'

function Toggle() {
const [show,setShow]  = useState (true)




  return ( 
    <div>
      <h2>Toggle Example </h2>

      <button onClick= {()=>setShow(!show)}>
        Toggle Text 
       </button>
     
     {show && <p>This is visibile</p>}

    </div>
  )
}

export default Toggle
