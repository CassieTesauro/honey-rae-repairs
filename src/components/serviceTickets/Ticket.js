import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"

export const Ticket = () => {

    const [ticket, assignTicket] = useState({}) //useEffect step 3: since we're fetching data, we need new setState() to make a variable to store the fetched data and a function to put that data into the variable.

    const { ticketId } = useParams()  // <---See dynamic route notes at the bottom of the module.

    useEffect( 
        () => {
            return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)  //useEffect step 2: when the variable changes, do this fetch.
                .then(response => response.json())
                .then((fetchedAPITicketStateById) => {
                    assignTicket(fetchedAPITicketStateById)
                })
        },
        [ ticketId ] //1. useEffect step 1: watch this variable for changes.
    )

    return ( //useEffect step 4: return JSX that's populated with the fetched and stored ticket state.  The normal ticket object state has employee and customer Ids but not names, so the fetch url above has to be expanded so the names can be fetched as well.  So instead of using "fetch(`http://localhost:8088/serviceTickets/${ticketId}`)" -----> fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`).  Check this in your devtools network tab to make sure the fetch works currectly.
       <>
        <h2>Ticket Details</h2>
        <section className="ticket">
            <h3 className="ticket_description">{ ticket.description }</h3>
            <div className="ticket_customer">{ ticket.customer?.name }</div>
            <div className="ticket_employee">{ ticket.employee?.name }</div>
        </section>
       </> 
    )
}

//DYNAMIC ROUTE NOTES P. 2
//We need to capture whatever id number is at the end of the dynamic route so our code knows to grab and display the correct information.  In the route /tickets/:ticketId(\d+) the 'ticketId' variable acts as an object key here.  We use object destructuring (looks like 'const { ticketId }') and the useParams() hook to capture the id number.  

//DYNAMIC ROUTE NOTES P. 3
//We need to make a useEffect to run when the value of the ticketId variable has changed, so se need to put that variable in the useEffect's array to be watched for changes.  As soon as that variable changes (aka has a value), we want to go get that value's data from the API, so we return a fetch that interpolates the ticketId's value.


//OPTIONAL CHAINING NOTES 
//After the first time you click on a ticket and the jsx is returned, if you try to click on someone else you'll get an error that says "cannot read property 'name' of undefined" because on the initial rendering of the jsx, the value of the state variable 'ticket' is an empty object. At that point, there is no customer or employee to look at, so there are no name properties to look at.  We stop this error from happening with OPTIONAL CHAINING.  Add a question mark after the object names.  

//<div className="ticket_customer">{ ticket.customer?.name }</div>    <----OPTIONAL CHAINING: If the customer exists (AKA you've fetched data and the ticket variable's value isn't still an empty array), display it's name property. 