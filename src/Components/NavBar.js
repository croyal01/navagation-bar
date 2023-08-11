//import { Children } from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
export default function Navbar()
{
   
    return (
        <nav className="nav">
            <a href="/" className="site-title"> Royal Managed Properties </a>
            <ul>
                
                    {/*<CustomLink href="../Pages/Home" />
                    <CustomLink href="../Pages/About"/>
                    <CustomLink href="../Pages/Welcome" />
                    <CustomLink href="../Pages/MgtServices" />*/}
                    {/* I am seeing an empty page */}
                    <CustomLink to="../Pages/Home" />
                    <CustomLink to="../Pages/About"/>
                    <CustomLink to="../Pages/Welcome" />
                    <CustomLink to="../Pages/MgtServices" />                
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
        <div>
            {/*<li className={path===href ? "active" : ""}>
                <a href={href} {...props}> {children} </a>
            </li>*/}
            <li className={isActive ? "active" : ""}>
                <Link to = {to} {...props}> 
                    {children}
                </Link>
            </li>

        </div>
    );
}