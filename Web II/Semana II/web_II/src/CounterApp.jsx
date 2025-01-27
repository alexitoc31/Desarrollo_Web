import {useState} from 'react'

const CounterApp =({initialValue})=>{
   const [counter, setCounter] = useState(props.initialValue)(0);

   function handleAdd(){
        setCounter(counter+1);
   }
   function handleSubstract(){
    setCounter(counter-1);
}

   return( 
        <> 
        <h1> {counter}</h1>
        <button> onClick={handleAdd}>+1</button>
        <button> onClick-1</button>
        <button>Reset</button>
        </>
   )
}
export default CounterApp;