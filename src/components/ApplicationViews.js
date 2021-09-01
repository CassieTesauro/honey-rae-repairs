import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"

//Module Responsibility: PaDetermine which view of the app should be rendered depending on what the url in the browser is
//works with the navbar.  When someone 
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>
        </>
    )
}

//FUNCTIONALITY NOTES

//ApplicationViews works together with navbar.
// user clicks navbar link --> 
//event happens (browser url changes) --> 
//ApplicationViews.js evaluates all the possible routes and looks for a match -->
// when a  browser url / <Route> path attribute match is found-->
//the function is unvoked to display the correct component