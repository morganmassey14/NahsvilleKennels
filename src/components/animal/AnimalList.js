import React, { useState, useEffect } from 'react';
import { AnimalCard } from './AnimalCard';
import { getAllAnimals } from '../../modules/AnimalManager';

export const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI =>{
            setAnimals(animalsFromAPI);
        });
    };

    useEffect(() => {
        getAnimals();
    }, []);

    console.log("animals is", animals)
    return (
        <div className="container-cards">
            {animals.map(animal => <AnimalCard key={animal.id} animal={animal}/>)}
        </div>
    );
};