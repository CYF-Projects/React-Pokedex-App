import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {
	function logWhenClicked() {
		console.log("Image was clicked!");
	}
	return (
		<div>
			<Logo appName="Kara's Pokedex" clickImgFunction={logWhenClicked} />
			<BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
			<CaughtPokemon date={new Date().toLocaleDateString()} />
			<PokemonMovesSelector />
			<PokemonCity />
		</div>
	);
}

export default App;
