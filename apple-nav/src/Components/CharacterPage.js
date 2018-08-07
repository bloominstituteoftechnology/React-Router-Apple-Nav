import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import characters from "../data/characters";

const movieList = [
  { name: "Thor", id: 1 },
  { name: "Age of Ultron", id: 2 },
  { name: "Thor II", id: 3 },
  { name: "Infinity War", id: 4 }
];

function CharacterPage(props) {
  const character = characters.find(e => e.id === props.match.params.id);

  function clickHandler(url) {
    props.history.push(url);
  }

  console.log(props);
  return (
    <Fragment>
      <img
        className="character-image"
        src={character.img}
        alt={character.name}
      />
      <div className="nav-buttons">
        <button
          onClick={() =>
            clickHandler(`/characters/${parseInt(character.id, 10) - 1}`)
          }
        >
          Back
        </button>
        <button onClick={() => clickHandler("/characters/")}>
          Back To List
        </button>
        <button
          onClick={() =>
            clickHandler(`/characters/${parseInt(character.id, 10) + 1}`)
          }
        >
          Next
        </button>
      </div>
      <div className="character-info-wrapper">
        <h1>{character.name}</h1>
        <h4>({character.nickname})</h4>
        <p>{character.description}</p>
      </div>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link to={`/characters/${character.id}/${movie.id}`}>
              {movie.name}
            </Link>
          </li>
        ))}
      </ul>
      <Route
        path="/characters/:id/:movieId"
        render={props => (
          <Movie {...props} character={character} movies={movieList} />
        )}
      />
    </Fragment>
  );
}

function Movie(props) {
  return (
    <div>
      <h2>The movie you chose inside {props.character.name}'s page was:</h2>
      <h4>
        {
          props.movies.find(
            movie => `${movie.id}` === props.match.params.movieId
          ).name
        }
      </h4>
    </div>
  );
}

export default CharacterPage;
