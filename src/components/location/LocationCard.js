import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => 
    {
        return(
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">Address: {location.address}</div>
        <picture>
            <img src={require(`../../images/${location.image}`).default} alt="My Dog" />
        </picture>
    </section>
         ) }