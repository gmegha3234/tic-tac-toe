import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainBox from './components/MainBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (<>
    <div>
      <MainBox ></MainBox>
    </div></>
  );
}

export default App
