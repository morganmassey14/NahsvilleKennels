import React, { useState, useEffect } from 'react';
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, deleteAnimal } from '../../modules/AnimalManager';

export const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI =>{
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
        <div className="container-cards">
            {animals.map(animal => <AnimalCard key={animal.id} animal={animal}
            handleDeleteAnimal={handleDeleteAnimal} />)}
        </div>
    );
};