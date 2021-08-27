import React, { useEffect, useState } from "react" //"use__ hooks" are built-in functions in react
    


export const EmployeeList = () => { 
   
    const [employees, setEmployees] = useState([])  

    useEffect(  
        () => {
            fetch("http://localhost:8088/employees") 
                .then(res => res.json())  
                .then((fetchedAPIEmployeeArray) => {   
                    setEmployees(fetchedAPIEmployeeArray)  
                })  
        },
        []
    )

    return(  
      <>
            { 
                employees.map(
                    (employeeObject) => { 
                    return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p> 
                    }  
                )
            }
        </> 
  )
}  


