import React from "react"
import "./Customer.css"
import { Link } from "react-router-dom"


export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    console.log(customer)
    return (
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__address">Address: {customer.address}</div>
            <div className="customer__animal">Pet: {customer.animal}</div>
            <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>GET OUT</button>
            <Link to={`/customers/${customer.id}`}>
                <button>Details</button>
            </Link>

            <picture>
                {<img src={require(`../../images/${customer.image}`).default} alt="My Dog" />}
            </picture>
        </section>
    )
}