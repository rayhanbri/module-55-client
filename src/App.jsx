
import './App.css'
import Users from './component/Users'

  // promise banaithe hobe function app er upore 
  const userPromise = fetch('http://localhost:3000/users')
  .then(res => res.json())

function App() {


  
  return (
    <>
     
      <h1>Simple CRUD Operation</h1>
      <Users userPromise={userPromise}></Users>
      
    </>
  )
}

export default App
