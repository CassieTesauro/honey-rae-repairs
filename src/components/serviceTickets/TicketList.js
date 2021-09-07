import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import './Tickets.css';

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => { //in API in browser, added ?_expand=employee&_expand=customer to make the matching customer and employee's objects appear for easier access with dot notation in the return statement at the bottom.  So the customerId and employeeId foreign keys auto matched and expanded to show the objects.
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((serviceTicketsFromAPI) => {
                    updateTickets(serviceTicketsFromAPI)
                })
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>

            </div>
            {
                tickets.map(  
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}> 
                            <p className={ticket.emergency ? "emergency" : "ticket"}>  
                                {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>

                        </div>

                    }
                )
            }
        </>
    )

}

//HYPERLINK NOTE
//In the return, we turned the interpolated ticket description text into a hyperlink that can be clicked on by adding link tag  ---> <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link>.   That's the first step to setting up the dynamic routing explained at the bottom of  applicationViews.js