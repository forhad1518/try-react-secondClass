
import './App.css'
import Counter from '../Counter'
import Users from './Users'

function App() {

  function handleClick(){
    alert ("Wow, Are You Click me?")
  }
  const addedFive = (num) =>{
    alert (num + 5)
  }
  return (
    <section>
      <h3>React Core Concept Second day</h3>
      <br />
      <Users></Users>
      <br />
      <Counter></Counter>
      <br />
      <button onClick={handleClick}>Click Me!</button>
      <button className='btn btn-outline btn-secondary'  onClick={() => addedFive(3)}>Button 2</button>
    </section>
  )
}

export default App
