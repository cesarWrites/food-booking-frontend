import React, {useState} from "react";
import NavBar from "./NavBar";
function Home(){
    let [show, setForm] = useState(false);
    let [signUp, setSignUp] = useState(false);
    const background_url = "https://codetoinvent.com/wp-content/uploads/2020/12/programming-courses-back.jpg"

    function handleClick(){
        setForm(true);
      }

      function handleSignUpClick(){
        setSignUp(true);
      }
    return(
        <div className="home-div">
            <header>
            <h1 className="app-name">Book a Meal</h1>
            <NavBar/>
            </header>
            <div className="head-sect">
            <div className ="home-det">
                <article>
                    <h3>Book a meal from our </h3>
                </article>
            </div>
            </div>
        </div>
    )
}

export default Home;