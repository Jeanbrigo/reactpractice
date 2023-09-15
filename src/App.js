import { Outlet, Link, Form } from 'react-router-dom';
import './App.css';


function App() {
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
