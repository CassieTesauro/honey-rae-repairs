import React from "react"
import { Link } from "react-router-dom" //import Link function from the react-router-dom library so we can use the Link component in our code.  The Link component has one job: generate anchor tags.  <Link> is like <a>.  The to= attribute is like href=.
//import "./NavBar.css"
export const NavBar = () => {
    return(
        <ul className="navbar">
            <li className="navbar_item active">
                <Link className="navbar_link" to="/employees">Employees</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/customers">Customers</Link>
            </li>
        </ul>
    )
}

//Once you render the navbar links, you can inspect them in devtools by clicking inspect and clicking the link in the UI.  The html should pop up in the devtools window.  You can see the anchor <a> tag and the href attribute.