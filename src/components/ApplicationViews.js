import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { Employee } from "./employees/Employee"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { TicketForm } from "./serviceTickets/TicketForm"
import { TicketList } from "./serviceTickets/TicketList"
import { Ticket } from "./serviceTickets/Ticket"

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

            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
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

            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
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

//The route path listener for tickets will run whenever the path for ticketform runs, so to avoid the accidental double match that renders both matches at once, we make the path for tickets an 'exact path'.

//DYNAMIC ROUTE NOTES P. 1
//the route path /tickets/:ticketId(\d+) runs and renders Ticket() when the route is 'tickets/some ticket's primary id'. AKA in the UI, a user clicks the ticket's description, which is a hyperlink.  With react-router-dom, to make that happen you need a colon and then a variable name.  React will store the ID number of the clicked-on item in that variable.  To make sure that only numbers can be stored in the variable, add the (\d+).  That way if a user goes into the address bar and changes the url to be something weird like 'tickets/taco', it won't store the value 'taco'.  Now when the user clicks the link, the url will change to be tickets/the id number.  We still need to capture that number another way.  Notes in Ticket.js on that process.