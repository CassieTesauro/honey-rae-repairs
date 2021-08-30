import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])

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
            { 
                tickets.map(
                    (ticket) =>{
                        return <div key={`ticket--${ticket.id}`}>
                                    <p>{ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>
                                </div>
                        
                    }
                )
            }
        </>
    )

}