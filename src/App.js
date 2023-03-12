// // Without useMemo Hook
// import React , {useState} from "react";

// function App() {

//     const [color , setColor] = useState('red')

//     const[count ,  setCount] = useState(0)

//     function OddAndEven() {
//         return count%2===0
//     }
    
//   return (
//     <div className="App">
//         <h1>Usememo Hook</h1>

//          <button onClick={() => {setColor(color === 'red' ? 'green' : 'red')}}>{color}</button>

//          <button onClick={()=>{setCount(count + 1)}}>Count :- {count}</button>

//          {OddAndEven() ? "even" :"odd"}
//     </div>
//   );
// }

// export default App;


//  With UseMemo hook
import React , {useState , useMemo} from "react";

function App() {

    const [color , setColor] = useState('red')

    const[count ,  setCount] = useState(0)

    const OddAndEven = useMemo(function OddAndEven() {
        console.warn("function is callled !")
        return count%2===0
    },[count])
    
  return (
    <div className="App">
        <h1>Usememo Hook</h1>

         <button onClick={() => {setColor(color === 'red' ? 'green' : 'red')}}>{color}</button>

         <button onClick={()=>{setCount(count + 1)}}>Count :- {count}</button>

         {OddAndEven ? "even" :"odd"}
    </div>
  );
}

export default App;
