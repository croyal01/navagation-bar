

import React from "react";
import {Route, Routes} from "react-router-dom";

//import App from "./App";
import "./styles.css";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Services from "./Pages/Services.js";
import Welcome from "./Pages/Welcome.js";
import Navbar from "./Components/NavBar.js";

import Footer from "./Components/Footer";

function App() { 
 
return(
 <Navbar> 
    <div className="container"> 
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Welcome" element={<Welcome />}></Route>
        <Route path="/Services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </div>
     {/* After adding return I am seeing an empty page */}
  </Navbar> 
);
}

export default App;

/**
  let Component
        switch (window.location.pathname) {
          case  "/":
            Component = Home;
              break;
          case "/About": 
              Component = About;
              break;
          case  "/Welcome":
            Component = Welcome;
              break;
          case  "/Services":
            Component = Services;
              break;
          default: 
          Component = Home;
              break;
        }

       return ( 
       <div>      
         <Navbar />
         <Component />
        </div>

       );

  <div className="App">
      <header className="App-header">
      <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */