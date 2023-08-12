//import { Children } from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
//import Home from "../Pages/Home";
//import About from "../Pages/About";
//import Welcome from "../Pages/Welcome";
//import Services from "../Pages/Services";

export default function Navbar()
{  
    return (
        <nav className="nav">
            <a href="/" className="site-title"> Royal Managed Properties </a>
            <ul>

                    <CustomLink to="../Pages/Home" className="customlink" >Home</CustomLink>
                    <CustomLink to="../Pages/About"  className="customlink" >About</CustomLink>
                    <CustomLink to="../Pages/Welcome"  className="customlink" >Welcome</CustomLink>
                    <CustomLink to="../Pages/Services"  className="customlink" >Services</CustomLink> 
                    
                    {/* <CustomLink to="/Home" className="customlink" >Home</CustomLink>
                    <CustomLink to="/About"  className="customlink" >About</CustomLink>
                    <CustomLink to="/Welcome"  className="customlink" >Welcome</CustomLink>
                    <CustomLink to="/Services"  className="customlink" >Services</CustomLink>            
            
                    <CustomLink to={<Home />} className="customlink" >Home</CustomLink>
                    <CustomLink to={<About />}  className="customlink" >About</CustomLink>
                    <CustomLink to={<Welcome />}  className="customlink" >Welcome</CustomLink>
                    <CustomLink to={<Services />}  className="customlink" >Services</CustomLink>
                    
                    <CustomLink to="/Home" className="customlink" ><Home /></CustomLink>
                    <CustomLink to="/About"  className="customlink" ><About /></CustomLink>
                    <CustomLink to="/Welcome"  className="customlink" ><Welcome /></CustomLink>
                    <CustomLink to="/Services"  className="customlink" ><Services /></CustomLink>*/}
            
            </ul>            
        </nav>
    );
}

function CustomLink({to, children, ...props})
{
    //const path = window.location.pathname;
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return (
        
        
            <li className={isActive ? "active" : ""}>
                <Link to = {to} {...props}> 
                    {children}
                </Link>
            </li>
       
        
    );
}


