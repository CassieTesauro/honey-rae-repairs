import React from "react"
import { Link } from "react-router-dom" //import Link function from the react-router-dom library so we can use the Link component in our code.  



export const NavBar = () => {
    return(
        <ul className="navbar">
            <li className="navbar_item active">
                <Link className="navbar_link" to="/employees">Employees</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/customers">Customers</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/tickets">Service Tickets</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("honey_customer") //logs out current user by deleting the honey_customer:user's id key:value pair stored inlocal storage while user in logged in.
                        }
                    }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}

//NOTES ABOUT LINKS
//Link and Route (on ApplicatioViews.js) components work together so user can use the navbar.
//The Link component has one job: generate anchor tags.  <Link> is like <a>.  The to= attribute is like href=.
//You can inspect links in devtools: click inspect and click the link in the UI.  The html should pop up in the devtools window.  You can see the anchor <a> tag and the href attribute.
//When you click the link like a user would, the url in the browser's url address bar changes to have /linkname at the end.