
import './App.css'

function App() {

  function handleClick(){
    alert ("Wow, Are You Click me?")
  }
  const addedFive = (num) =>{
    alert (num + 5)
  }
  return (
    <>
      <h3>React Core Concept Second day</h3>
      <button onClick={handleClick}>Click Me!</button>
      <button className='btn btn-outline btn-secondary'  onClick={() => addedFive(3)}>Button 2</button>
    </>
  )
}

export default App
