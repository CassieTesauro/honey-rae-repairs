import React from "react" //1.  Allows us to use React library features
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketList } from "./serviceTickets/TicketList";
    

//Module Responsibilities: Define component/function Repairs, which will determine layout and order other components appear on the site.


export const Repairs = () => { //2.  Whatever this function returns will be the html that gets generated in the browser. In React components, the html-ish code is called jsx.  It has some differences from html.  React takes the jsx, converts it to js, then renders the html from the js.
        return(  //3.  If you want to generate html from in a React component,  you need a return.  The html goes inside the return parentheses.
            <>
                <h1>Honey Rae's Repair Shop</h1>  
                
                <h2>Customer List</h2>
                <CustomerList />    

                <h2>Employee List</h2>
                <EmployeeList />  

                <h2>Service Tickets</h2>
                <TicketList />  
            </> //  In React, we can only return 1 jsx element.  So we wrap our h1 and h2's in a "fragment" of <> and </>.
                //The "<CustomerList /> " is what a function call looks like. Go to customerlist.js to see how that state is fetched from API, stored locally, maped, and rendered.
  )
}  

