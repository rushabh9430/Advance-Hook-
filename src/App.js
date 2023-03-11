import { useState } from "react";
import BottomLevelComponent from "./Component/BottomLevelComponent";
import Monkey from "./context/UseContext";

function App() {
  const [state, setstate] = useState("Rushabh");


  const update =  () => {
    setTimeout(() => {
        setstate("Manish")
    }, 2000);
  }
  return (
    <div className="App">
      <Monkey.Provider value={{state,update}}>
        <BottomLevelComponent />
      </Monkey.Provider>
    </div>
  );
}

export default App;
