import { useState } from "react"
const Counter = () => {
const [count , setCount] = useState(0)
  return (
    <div className="div">
      <div className="under">
      <h1>{count}</h1>
      <div className="btn">
      <button onClick={() => setCount(count + 1)}>increment</button>


      <button onClick={() => {
        if (count > 0) {
           setCount(count -1);
        }
        
       }}>
       Decrement
       </button>
      


      <button onClick={() => setCount (0)}>reset</button>
      </div>
     </div>
    </div>
  )
}
export default Counter
