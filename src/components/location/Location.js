import React, {useState, useEffect } from "react"
import { LocationCard } from "./LocationCard"
import { getAllLocations } from "../../modules/LocationManager"
import "./Location.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI =>{
            setLocations(locationsFromAPI);
        });
    };

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard key={location.id} location={location}/>)}
        </div>
    );
};