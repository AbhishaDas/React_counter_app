import { useState } from 'react';
import Counter from './Counter';
import './style.css'

function App() {
  const [count,setCount]= useState(0)
  function addCount(){
    setCount(count+1)
  }
  let obj ={
    title : 'Counter',
    count
  }
  return (
   <div className='App'>
    <button onClick={addCount}>Add</button>
    <Counter {...obj}/> {/* spread operator */} 
   </div>
  );
}

export default App;
