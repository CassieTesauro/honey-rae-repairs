import React from "react" //1.  Allows us to use React library features
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";


    

//Module Responsibilities: Define component/function Repairs, which displays the navbar and calls the ApplicationViewsComponent so the user's display mathces the url as the click navbar items.


export const Repairs = () => { //2.  Whatever this function returns will be the html that gets generated in the browser. In React components, the html-ish code is called jsx.  It has some differences from html.  React takes the jsx, converts it to js, then renders the html from the js.
        return(  //3.  If you want to generate html from in a React component,  you need a return.  The html goes inside the return parentheses.
            <>
                <NavBar />
                <h1>Honey Rae's Repair Shop</h1>  
                
                <ApplicationViews />
            </> 
  ) 
}  

//  In React, we can only return 1 jsx element.  So we wrap our h1 and h2's in a "fragment" of <> and </>.
//The "<ApplicationViews /> " is what a function call looks like. 
//Go to customerlist.js to see how that state is fetched from API, stored locally, maped, and rendered.