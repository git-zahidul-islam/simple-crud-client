import { Link } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';

function App() {
  const handleAddUser = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);


    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log('post data', data);
        if(data.insertedId){
          alert("user added successfully")
          form.reset()
        }
      })
  }

  return (
    <>
      <Nav></Nav>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </>
  )
}

export default App
