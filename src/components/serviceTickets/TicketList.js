import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import './Tickets.css';

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()


//premade function every time we need to fetch ticket data for the list (or refetch it after a delete)
const fetchCallForTicketList = () => { 
    fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer") //in API in browser, added ?_expand=employee&_expand=customer to make the matching customer and employee's objects appear for easier access with dot notation in the return statement at the bottom.  So the customerId and employeeId foreign keys auto matched and expanded to show the objects.
                .then(res => res.json())
                .then((serviceTicketsFromAPI) => {
                    updateTickets(serviceTicketsFromAPI)
                })
        }
    

useEffect(
    () => {
        fetchCallForTicketList()
    },
    []
)
    

//component goes with delete button in jsx
    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        .then(
            () => {
                fetchCallForTicketList()
            }
        )
        
    }
    
//jsx
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

                                <button onClick={
                                    () => {
                                        deleteTicket(ticket.id)}
                                    }>Delete
                                </button>
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