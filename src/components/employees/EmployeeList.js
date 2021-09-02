import React, { useEffect, useState } from "react" //"use__ hooks" are built-in functions in react
    


export const EmployeeList = () => { 
   
    const [employees, changeEmployee] = useState([])  //const [stateVariable, functionToBeUsedOnTheStateVariable] = useStateHook(variable's intitial value aka initial state 'change' 
    
    const [specialties, setSpecial] = useState([])

    useEffect(  //use effect is like fetch get set alltogether.  2 parameters:  what function should run, and an array holding the state value of when it should run.
        () => {
            fetch("http://localhost:8088/employees") 
                .then(res => res.json())  
                .then((fetchedAPIEmployeeArray) => {   
                    changeEmployee(fetchedAPIEmployeeArray)  //invoking here triggers the use effect on line 22
                })  
        },
        []
    )

    useEffect(
        () => {
            const justSpecialties = employees.map(emp => emp.specialty)

            setSpecial(justSpecialties.join(", "))
        }, 
    
        [employees]  //works with changeEmployee function at the top
     )

    return(  //html must be in a return in react.  Everything in one fragment so we're technically only returning 1 thing.
      <>
             <div>
                Specialties: { specialties }
            </div>
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


