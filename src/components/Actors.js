import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <>
    <h1>Actors Page</h1>
    {actors.map((actor)=>(
      <div key={actor.name}>
        <h2>Name :{actor.name}</h2>
        <ul>Movies:{actor.movies.map ((movie)=><li key={movie}>{movie}</li>)}</ul>
      </div>
    ))}
  </>
    );
}

export default Actors;
