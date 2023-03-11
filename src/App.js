// increament and Decrement code with using useReducer 

// What is useReducer ? 
//  🔯 useReducer is a react hook used for state management .

//  🔯 Alternative(વૈકલ્પિક) of useState() hook

//  🔯 preferable for complex state management logic.

// Syntax 


import React, { useReducer } from "react";

const initialState = 0 ;

const reducer = (state, action) => {
  if(action.type === 'INCREMENT') {
    return state + 1
  }

  if(action.type === 'DECEREMENT') {
    return state > 0 ? state - 1 : state 
  }
  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({type : 'INCREMENT'})}>Increment</button>
      {state}
      <button onClick={() => dispatch({type : 'DECEREMENT'})}>Decriment</button>
    </div>
  );
};

export default App;



//Simple increment Decrement Code  
// import React, { useState } from "react";

// function App() {
//     const[state , setState] = useState(0);

//   return (
//     <div className="App">
//         <button className="btn btn-primary" onClick={() => {setState(state + 1)}}>Increment</button>
//         {state}
//         <button className="btn btn-primary" onClick={() => {setState(state - 1)}}>Decriment</button>
//     </div>
//   );
// }

// export default App;
