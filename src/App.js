import { Outlet, Link, Form, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';


function App() {

  const navigate = useNavigate()

  useEffect(()=> {
    const loggedIn = localStorage.getItem("loggedIn")
    if (loggedIn === "true"){
      navigate("/dashboard")
    }
  },[])

  return (
    <div className="App">
      <h1>My Notetaking App</h1>
      <Link to="/signup"><button>Sign up</button></Link>
      <Link to="/login"><button>Log In</button></Link>
      <Form action="/logout" method="post"><button>Log Out</button></Form>
      <Outlet/>
    </div>
  );
}

export default App;
