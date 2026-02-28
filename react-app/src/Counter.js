import React from 'react'
import  {useState}  from 'react'
import './Counter.css'
const Counter=()=>{
   const[count,setCount]=useState(true);

   function change(){
    setCount(!count)
    console.log(count)
   }

   return(
    <div>
        <h1>{count? "true":"false"}</h1>
        <div className={count?"box1":"box2"}>

        </div>
    
<button className='btn_counter' onClick={change}>update</button>  
</div>
    )
}

export default Counter