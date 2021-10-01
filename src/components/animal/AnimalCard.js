import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => 
    {   console.log(animal)
        return(
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
        <picture>
            <img src={require(`../../images/${animal.image}`).default} alt="My Dog" />
        </picture>
    </section>
         ) }