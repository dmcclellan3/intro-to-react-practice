import { useState } from "react"
import { Link } from "react-router-dom"

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}




function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  return (
    <div 
      className="bg-dark h-100 p-5"
      style={{ color: 'white'}}
    >
      <Link className="text-light" to='./About'>About</Link>
      <br></br>
      <Link className="text-light" to='./Contacts'>Contacts</Link>
      <Title />
      <div className="counter-button"
        onClick={incrementCounter}
        >
        <button type="button" className="btn btn-primary">Increment</button>
        <br></br>
        <br></br>
      </div>
        <div className="decrement-counter-button" onClick={decrementCounter}>
        <button type="button" className="btn btn-primary">Decrement</button>
         
         </div>
         {counter}
        
    </div>
  )
}



export default App
