import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    console.log(employee)
    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <picture>
                <img src={require(`../../images/${employee.image}`).default} alt="My Dog" />
            </picture>
            <div className="employee__job">{employee.job}</div>
            <Link to={`/employees/${employee.id}`}>
                <button>Bio</button>
            </Link>
            <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Remove</button>
        </section>
    )
}