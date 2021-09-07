import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"

export const Employee = () => {

    const [employee, assignEmployee] = useState({}) //useEffect step 3: since we're fetching data, we need new setState() to make a variable to store the fetched data and a function to put that data into the variable.

    const { employeeId } = useParams()  

    useEffect( 
        () => {
            return fetch(`http://localhost:8088/employees/${employeeId}`)  //useEffect step 2: when the variable changes, do this fetch.
                .then(response => response.json())
                .then((fetchedAPIEmployeeStateById) => {
                    assignTicket(fetchedAPIEmployeeStateById)
                })
        },
        [ employeeId ] //1. useEffect step 1: watch this variable for changes.
    )

    return ( //useEffect step 4: return JSX that's populated with the fetched and stored ticket state.  The normal ticket object state has employee and customer Ids but not names, so the fetch url above has to be expanded so the names can be fetched as well.  So instead of using "fetch(`http://localhost:8088/serviceTickets/${ticketId}`)" -----> fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`).  Check this in your devtools network tab to make sure the fetch works currectly.
       <>
        <h2>Ticket Details</h2>
        <section className="employee">
            <h3 className="employee_name">{ employeeObject.name }</h3>
            <div className="employee_specialty">{ employeeObject.specialty }</div>
        </section>
       </> 
    )
}