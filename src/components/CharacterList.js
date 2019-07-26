import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function CharacterList() {
  // const [charactersAll, setCharactersAll] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`https://rickandmortyapi.com/documentation/#get-all-characters`)
  //     .then(res => {
  //       console.log("res", res);
  //       setCharactersAll(res.data.results);
  //     })
  //     .catch(err => console.log("This is not working!"));
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, [charactersAll, setCharactersAll])

  return <section className='character-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>
    </section>

}
