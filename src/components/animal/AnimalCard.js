import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"
import { firstLetterCase } from "../../modules/Helpers"
import { useHistory } from "react-router-dom"



export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    const history = useHistory();
    
    return (
        <section className="animal">
            <h3 className="animal__name">{firstLetterCase(animal.name)}</h3>
            <picture>
                <img src={require(`../../images/${animal.image}`).default} alt="My Dog" />
            </picture>
            <div className="animal__breed">{animal.breed}</div>
            <Link to={`/animals/${animal.id}`}>
                <button>Details</button>
            </Link>
            <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
            <button type="button"
                onClick={() => history.push(`/animals/${animal.id}/edit`)}>
                Edit
            </button>
        </section>
    )
}