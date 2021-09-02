import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { TicketForm } from "./serviceTickets/TicketForm"
import { TicketList } from "./serviceTickets/TicketList"

//Module Responsibility: PaDetermine which view of the app should be rendered depending on what the url in the browser is
//works with the navbar.  When someone 
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route exact path="/tickets"> 
                <TicketList />
            </Route>

            <Route path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}

//FUNCTIONALITY NOTES

//ApplicationViews works together with navbar.
//Route compoenent are listening for browser url change event-->
// user clicks navbar link --> 
//event happens (browser url changes) --> 
//ApplicationViews.js evaluates all the possible routes and looks for a match -->
// when a browser url / <Route> path attribute match is found-->
//the function is unvoked to display the correct component

//The route path listener for tickets will run whenever the path for ticketform runs, so to avoid the accidental double match that renders both mathes at once, we make the path for tickets an 'exact path'.