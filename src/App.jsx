import { useState } from 'react'
import LandingPage from './components/LandingPage'
import PreregisterModel from './components/PreregisterModel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LandingPage/>
     {/* <PreregisterModel/> */}
    </>
  )
}

export default App
