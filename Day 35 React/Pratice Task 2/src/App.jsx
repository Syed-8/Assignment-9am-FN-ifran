import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import InputExample from './components/InputExample'
import CounterApp from './components/CounterApp'
import LightOn from './components/LightOn'
import Login from './components/Login'
import LikeButton from './components/LikeButton'
import Buttonss from './components/Buttonss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
  <Counter/>
  <Toggle/>
  <InputExample/>
  <CounterApp/>
  <LightOn/>
  <Login/>
  <br></br>
  <LikeButton/>
<Buttonss/>
    </div>
  
    </>
  )
}

export default App
