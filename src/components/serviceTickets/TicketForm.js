import React, { useState } from "react"
//ApplicationViews has a Route that will render this ticket form.

//Module Responsibilities: Make a component to handle the new ticket form.

//Before the user clicks the submit button, their input is transient state.  So we need to track the transient state with a STATE VARIABLE.  And since this is react, that means we need to use the useState hook when we instantiate the state variable.  



export const TicketForm = () => {  //NEW COMPONENT DEFINITION

    //component step 1: Make a way to store state::  useState lets us make the state variable "ticket" to store the transient state as the user is filling out the form.  The state is stored as an object, so in the useState hook instantiate the TICKET variable's state as an array with the properties every ticket object has, and we give it some initial values.  You can see these intial value in devtools-->components-->Route(on the left)-->TicketForm(click on it)-->hooks
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    });  

    const saveTicket = (event) => {
        event.preventDefault()
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label> 
                    <input
                    omChange={ //2.  Component step 2:  make an event listener to listen for the change of a user typing a description and update the description state.
                        (evt) => { //3.  (evt) captures the event that will be passed to us an argument by the browser
                           const copy = {...ticket} //4.  we can't directly modify state in here with react, but we can copy the state and modufy that copy.  So, we make a copy of our existing state that's being stored in the variable 'ticket'.  Now the variable 'copy' contains a new object that has a copy of the state.
                           copy.description = evt.target.value //5.  We modify the value of the copy's description value to be whatever the user types.
                           updateTicket(copy)//6.  Now that we modified the copy, we take the copy and make it the new state by using our copy in the function we made [the function to let us modify the ticket state] in step one.

                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox" 
                        onChange={} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    )
}
