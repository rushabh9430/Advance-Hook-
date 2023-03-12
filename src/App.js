import React, { useCallback, useState } from 'react'
import BottomLevelComponent from './Component/BottomLevelComponent'
function App() {
    
    const[BottomComponent , setBottomComponent ] = useState(0)
    const[count ,setcount] = useState(0)
    const callback = useCallback(function update() {
        console.log("data")
    },[BottomComponent])
 

    
  return (
    <div>
        <BottomLevelComponent function={callback}  BottomComponent ={BottomComponent}/>
      <button onClick={() => {setcount(count + 1)}}>{count}</button>
    </div>
  )
}

export default App
