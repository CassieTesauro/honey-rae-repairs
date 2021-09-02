import React, { useState } from "react"
import { useHistory } from "react-router-dom" //24.  import the useHistory mechanism

//ApplicationViews has a Route that will render this ticket form.

//Module Responsibilities: Make a component to handle the new ticket form.

//Before the user clicks the submit button, their input is transient state.  So we need to track the transient state with a STATE VARIABLE.  And since this is react, that means we need to use the useState hook when we instantiate the state variable.  



export const TicketForm = () => {  //NEW COMPONENT DEFINITION

    //component step 1: Make a way to store state::  useState lets us make the state variable "ticket" to store the transient state as the user is filling out the form.  The state is stored as an object, so in the useState hook instantiate the TICKET variable's state as an array with the properties every ticket object has, and we give it some initial values.  You can see these intial value in devtools-->components-->Route(on the left)-->TicketForm(click on it)-->hooks
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    });  

    const history = useHistory() //25. store the useHistory() mechanism from the react-router-dom in a variable.

    const submitTicket = (evt) => {  //12.  component step 4:  Function for submit ticket button adds the remaining ticket data needed for a ticket object (customerId, etc) and makes the ticket object.  you can see this component invoked onclick down below on the button's code.
      evt.preventDefault() //[PREVENTING DEFAULT BEHAVIOR OF SUBMITTING A FORM IN THE BROWSER SO WE CAN INSPECT IT IN DEVTOOLS- MAKE EVT A PARAMETER AND DO EVT.PREVENTDEFAULT()]
        const newTicket = {//13. We need to use the state variable we created in step one to be able to post an object to the API 
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")), //14. when the user authenticates, we store the customer's id but it's in the localStorage.  We need to reference that id here.
            employeeId: 1,//15.  For now, we're hardcoding this employee id here as a precaution, because when you do any operation on the API, json will scan every object in the database and delete it if it has an invalid foreign key. So if the employee foreign key is something that doesn't match up with an existing employee primary key, json will delete that ticket object.
            dateCompleted: ""  //16.  This will be filled in later by the employees, so for now it's a blank string.
    }

    //17.  Component step 5: befire we can make a fetch call  to post the new ticket object to the API, we have to specify the fetch options necessary for the post.
    const fetchOption = {  //18.  Specify the fetch as an object.  
        method: "POST"  //19.   Specify fetch ethod as POST.
        headers: { //20.  Must include headers or the json server won't work correclty
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTicket)//21. Send the body of the request, AKA the new ticket object we've created.  But, we can't sent javascript objects across an http.  We can only send strings.  So we need to stringify the object.
    }

    //22. Component step 6:  Do the fetch call.  Include the fetchOptions that you specified.
    
    return fetch("http:localhost8088/serviceTickets", fetchOptions)
        .then(() => {  //23.  once the fetch is complete, we want to send the user back to the service tickets view so they can see the new ticket is listed.  We can do that by programming the browser url to change upon fetch post complettion using a "useHistory()" mechanism that we get access to from the react-router-dom. We need to import the mechanism at the top ofthe module. 
          history.push("/tickets") //26.  push our browser history to the ./tickets url, which will take the user to tickets view. 
        })
    }

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
                        (evt) => { //3.  (evt) parameter captures the event, which will be passed to us an argument by the browser
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
                    <input 
                        onChange={ //7. Component step 3: make an event listener to listen for the change of a user checking the emergency box and update the emerg. state.
                            (evt) => {  //8.  (evt) parameter captures the event, which will be passed to us an argument by the browser
                                const copy = {...ticket} //9.  make a copy of the current ticket state so we can modify the copy based on what the user does.
                                copy.emergency = evt.target.checked //10.  modify the copy based on what the user does.  Instead of value, we put 'checked' because emergency is a checkbox.
                                updateTicket(copy)//11.  Now that we modified the copy, we take the copy and make it the new state by using our copy in the function we made [the function to let us modify the ticket state] in step one.
     
                            }
                        }
                        type="checkbox"  />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitTicket}> 
                Submit Ticket
            </button>
        </form>
    )
}
