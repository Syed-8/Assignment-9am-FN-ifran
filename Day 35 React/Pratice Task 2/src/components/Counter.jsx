import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)

    const increase = ()=>{
        setCount(count+1)
    }

    const decrease = ()=>{
        setCount(count-1)
    }
    
    const reset = ()=>{
        setCount(0)
    }

  return (
    <div>
      <h2>Counter</h2>
      <h3>count:{count}</h3>

    <button onClick={increase}>plus</button>
    <button onClick={decrease}>minus</button>
    <button onClick={reset}>Reset</button>    


    </div>
  )
}

export default Counter
