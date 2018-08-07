import React from "react";
import { Link } from "react-router-dom";

function Characters(props) {
  return (
    <div className="characters-list-wrapper">
      {props.characters.map(character => (
        <div className="character-card" key={character.id}>
          <img src={character.thumbnail} alt={character.name} />
          <Link to={`/characters/${character.id}`}>{character.name}</Link>
          <p>({character.nickname})</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;
