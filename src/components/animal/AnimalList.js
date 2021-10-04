import React, { useState, useEffect } from 'react';
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, deleteAnimal } from '../../modules/AnimalManager';
import { useHistory } from 'react-router-dom';

export const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    const history = useHistory();

    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            setAnimals(animalsFromAPI);
        });
    };

    const handleDeleteAnimal = id => {
        deleteAnimal(id)
            .then(() => getAllAnimals().then(setAnimals));
    };


    useEffect(() => {
        getAnimals();
    }, []);

    console.log("animals is", animals)
    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/animals/create") }}>
                    Admit Animal
                </button>
            </section>
            <div className="container-cards">
                {animals.map(animal => <AnimalCard key={animal.id} animal={animal}
                    handleDeleteAnimal={handleDeleteAnimal} />)}
            </div>
        </>
    );
};