import React, { useEffect, useState } from 'react';
import axios from "axios";
import LocationCard from "./LocationCard.js";

export default function LocationsList(props) {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        axios
          .get("https://rickandmortyapi.com/api/location/")
          .then(res => {
            console.log(res.data.results);
            setLocations(res.data.results);
          })
          .catch(error => {
            console.error("Error with location!", error);
          });
      }, []);
    
      return (
        <section className="location-list grid-view">
          {locations.map(location => (
            <LocationCard
              key={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={location.residents}
            />
          ))}
        </section>
      );
}
