//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Meals from './Components/Meals';
import NavBar from "./Components/NavBar";
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Book your meal</h4>
        <SignIn/>
        <Login/>
      </header>
    </div>
  );
}

export default App;
