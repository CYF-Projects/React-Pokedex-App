import React, { useState } from "react";

const CaughtPokemon = (props) => {
	const [numberPokemon, setNumberPokemon] = useState(0);
	function addPokemon() {
		setNumberPokemon(numberPokemon + 1);
	}
	return (
		<div>
			<p>
        Caught {numberPokemon} Pokemon on {props.date}
			</p>
			<button onClick={addPokemon}>Catch Pokemon</button>
		</div>
	);
};

export default CaughtPokemon;
