import React, {useState, useRef} from "react";
import '../styles/auth.css';

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [isShown, setIsShown] = useState(false);
    const form = useRef(null);
   const handleClick = () => {
    setIsShown(current => !current);
   }
   
  
    const handleSubmit =(e) => {
      e.preventDefault();
      if(email == '' || password == ''){
         console.log("empty state");
         return 
      }
  
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email,
        password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
          setEmail('');
          setPassword('');
          setIsShown(current => !current);
        }
      });
  
      form.current.reset();
    }
  
    return (
      <div>
      <form className = "login-form" ref={form} onSubmit={handleSubmit}>
        <h3>Login With Email and password</h3>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <label htmlFor="password">Password: </label>
          <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" >Login</button>
      </form>
      <div>
        {isShown && (
          <div>
            <h2>You are now logged in!</h2>
          </div>
        )}
      </div>
      </div>
    );
  }
  
  export default Login;
  