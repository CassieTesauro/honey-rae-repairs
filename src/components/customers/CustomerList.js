import React, { useEffect, useState } from "react" //1.  Allows us to use React library features
    


export const CustomerList = () => { //2.  Whatever this function returns will be the html that gets generated in the browser. In React components, the html-ish code is called jsx.  It has some differences from html.  React takes the jsx, converts it to js, then renders the html from the js.
   
    const [customers, setCustomers] = useState([])  //4. We need a place to store fetched API data.  We don't make dataAcces.js and an object to store state arrays.  Instead, make a hook "useState()".  Pass the initial value of database.customers, an empty array, into the hook as an argument.  Whenever we invoke the useState hook, it will return the initial value of the database.customers state, aka an empty array, and a function to set the value of database.customers later on.  We capture that intial value and the setter function in the left side of the expression in a variable and function name.  We name them whatever we want.  Here, customers is the state variable and setCustomers is the function name.  Remember: we call customers a "state variable"

    useEffect(  //5. We made something to store our data locally in step 7.  Now we need something to go get the state from the API.  Make a useEffect() hook.  useEffect's sole purpose is to run when certain state changes.  It's basically an event listener. It takes two arguments: a function and an array.
        () => {
            fetch("http://localhost:8088/customers") //6.  Fetch the API customers state
                .then(res => res.json())  //7.  Convert the fetched state into JS
                .then((fetchedAPICustomerArray) => {   //8. make a name to reference what you fetched
                    setCustomers(fetchedAPICustomerArray)  //9. call the setCustomers function from step 7 using the fetched state as an argument.  Now, that state will be stored in the Repairs() component in the customers variable.
                }) //10.  you just made a network call, so go to the network tab in devtools and filter by XHRs.  you should see that customers had a GET from the api's url.  Click preview to see the state.  
        },
        []
    )

    return(  //3.  If you want to generate html from in a React component,  you need a return.  The html goes inside the return parentheses.
      <>
            { //11.  Now that we have the customer state stored locally, we're ready to iterate through it and generate the html. We use interpolation to put javascript into this return. No $ used, just {}.
                customers.map(//112.  Since .map is a conversion tool, we'll use map on the customers state object array to iterate through each customer object and convert it to html.
                    (customerObject) => { //13.  REMEMBER: map always takes in a function to say what we're doing to convert the array.  We have one parameter to represent each customerObject as it is iterated. 
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p> //14.  Returning an html list of all the customers names as h2's.
                    }  //15.  In react, each jsx element that you render requires an attribute called 'key' that shoud be unique to that element.
                )
            }
        </> //16.  In React, we can only return 1 jsx element.  So we wrap our h1 and h2's in a "fragment" of <> and </>.
  )
}  


