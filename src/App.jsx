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
  // console.log(counter)
  return (
    <div 
      className="bg-dark h-100 p-5"
      style={{ color: 'white' }}
    >
      <Link className="text-light" to='./About'>About</Link>
      <br></br>
      <Link className="text-light" to='./Contacts'>Contacts</Link>
      <Title />
      <div className="counter-button"
        onClick={incrementCounter}
      >
        <button type="button" className="btn btn-primary">Counter</button>
        <br></br>
        {counter}
      </div>
    </div>
  )
}



export default App
