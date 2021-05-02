import React, { useState } from "react";

const CaughtPokemon = (props) => {
	const [caught, setCaught] = useState([]);
	const [pokemonNameInput, setPokemonNameInput] = useState("");

	const handleInputChange = (event) => {
		console.log(event.target.value);
		setPokemonNameInput(event.target.value);
	};

	function addPokemon() {
		setCaught(caught.concat(pokemonNameInput));
		setPokemonNameInput("");
	}
	return (
		<div>
			<p>
				Caught {caught.length} Pokemon on {props.date}
			</p>
			<input
				type="text"
				placeholder="Enter Pokemon name"
				value={pokemonNameInput}
				onChange={handleInputChange}
			></input>
			<button onClick={addPokemon}>Catch Pokemon</button>
			<ul>
				{caught.map((pokemon, index) => (
					<li key={index}>{pokemon}</li>
				))}
			</ul>
		</div>
	);
};

export default CaughtPokemon;
