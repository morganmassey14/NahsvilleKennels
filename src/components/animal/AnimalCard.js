import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => 
    {   console.log(animal)
        return(
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <picture>
            <img src={require(`../../images/${animal.image}`).default} alt="My Dog" />
        </picture>
    </section>
         ) }