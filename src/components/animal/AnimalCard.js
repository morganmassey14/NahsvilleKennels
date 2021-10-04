import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"


export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    console.log(animal)
    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <picture>
                <img src={require(`../../images/${animal.image}`).default} alt="My Dog" />
            </picture>
            <div className="animal__breed">{animal.breed}</div>
            <Link to={`/animals/${animal.id}`}>
                <button>Details</button>
            </Link>
            <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
        </section>
    )
}