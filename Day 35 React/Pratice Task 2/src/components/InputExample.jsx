import React, { useState } from 'react'

function InputExample() {
    const[name,setName] = useState("");

  return (
    <div>
        <input type ="text" placeholder='Enter your Name' onChange={(e) => setName(e.EventTarget.value)}/>
        <p> Your Name is {name}</p>

    </div>
  )
}

export default InputExample
