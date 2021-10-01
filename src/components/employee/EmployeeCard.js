import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => 
    {   console.log(employee)
        return(
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__address">Address: {employee.address}</div>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>FIRE THEM</button>
        <picture>
            <img src={require(`../../images/${employee.image}`).default} alt="My Dog" />
        </picture>
    </section>
         ) }