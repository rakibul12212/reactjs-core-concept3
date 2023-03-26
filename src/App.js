import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  
  //evavew kora jay
  const increaseCount = () =>setCount(count +1); 
  const decreaseCount = () =>setCount(count -1); 
    
   //evavew kora jay
  //handeler jog korc ei jaygay
  // const increaseCount = () =>{
  //   const newCount =count +1;
  //   setCount(newCount); 
  // }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}

export default App;
