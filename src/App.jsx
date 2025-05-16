
import './App.css'
import Users from './component/Users'


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
