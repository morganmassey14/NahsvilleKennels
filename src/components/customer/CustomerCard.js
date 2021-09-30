import React from "react"
import "./Customer.css"


export const CustomerCard = ({ customer }) => 
    {   console.log(customer)
        return(
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__address">{customer.address}</div>
        {/* <picture>
            { <img src={require(`../../images/${animal.image}`).default} alt="My Dog" /> }
        </picture> */}
    </section>
         ) }