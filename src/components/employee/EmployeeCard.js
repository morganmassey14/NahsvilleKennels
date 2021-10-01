import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    console.log(employee)
    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__address">Address: {employee.address}</div>
            <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>FIRE THEM</button>
            <Link to={`/employees/${employee.id}`}>
                <button>Details</button>
            </Link>
            <picture>
                <img src={require(`../../images/${employee.image}`).default} alt="My Dog" />
            </picture>
        </section>
    )
}