import React from "react";
import {Route, Routes} from "react-router-dom";
//import App from "./App";
import "./styles.css";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Services from "./Pages/Services.js";
import Welcome from "./Pages/Welcome.js";
import Navbar from "./Components/NavBar.js";

//import Footer from "./Components/Footer";
//import Header from "./Components/Header";

function App() { 
  return(
    <div className="container">
      <Navbar>        
          <Routes>
            <Route className="customlink about" path="/Home" element={<Home />}>Home</Route>
            <Route className="customlink about" path="/About" element={<About />}>About</Route>
            <Route className="customlink about" path="/Welcome" element={<Welcome />}>Welcome</Route>
            <Route className="customlink about" path="/Services" element={<Services />}>Services</Route>
          </Routes>
      </Navbar>  
      {/*<Header />
      <Footer />*/}
    </div>
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