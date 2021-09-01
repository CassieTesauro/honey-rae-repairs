import React from "react" //1.  Allows us to use React library features
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css"

export const Repairs = () => (
    <>
      <Route
        render={() => { //every route has a custom rendering function that you can specify if you need to
          if (localStorage.getItem("honey_customer")) {  // matches up with code in register.js.   if the customer has logged in, then the honey_customer key is present. return navbar and application views.
            return (
              <>
                <NavBar />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;  //Redirect component has been imported from the react-router-dom.  if the honey_customer key isn't in local storage, then no one has signed in. The redirect will change the url to include /login at the end, which will match the  <Route path ="/login"> below, which will invoke the <Login /> component and render the login page.
          }
        }}
      />
  
      <Route path="/login"> 
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );
    

/////////NOTES FROM BEFORE LOGIN AND REGISTER WERE ADDED://////////////////

//Module Responsibilities: Define component/function Repairs, which displays the navbar and calls the ApplicationViewsComponent so the user's display mathces the url as the click navbar items.


// export const Repairs = () => { 
//         return(  
//             <>
//                 <NavBar />
//                 <h1>Honey Rae's Repair Shop</h1>  
                
//                 <ApplicationViews />
//             </> 
//   ) 
// }  

//REACT BASICS 
//  In React, we can only return 1 jsx element.  So we wrap our h1 and h2's in a "fragment" of <> and </>.
//The "<ApplicationViews /> " is what a function call looks like. 
//Go to customerlist.js to see how that state is fetched from API, stored locally, maped, and rendered.
//  When a react function returns html that gets generated in the browser, the html-ish code is called jsx.  It has some differences from html.  React takes the jsx, converts it to js, then renders the html from the js.  If you want to generate html from in a React component,  you need a return.  The html goes inside the return parentheses.