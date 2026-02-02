import React from 'react'

function Card({children}) {
  return (
    <div style={{border:"2px solid red",padding:"10px",margin:"10px"}}>
        {children}
      
    </div>
  )
}

export default Card

// 5 props are read only because React follows one way data flow .
// this ensures that child components cannot modify parent data,making the aopplication 
// more predictable,stable,and easier to debug
 
