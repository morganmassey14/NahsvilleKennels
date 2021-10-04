import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { getLocationById } from '../../modules/LocationManager';



export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });

  const {locationId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address
        });
      });
  }, [locationId]);

  return (
    <section className="location__details">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div> */}
    </section>
  );
}