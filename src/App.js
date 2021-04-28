import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
	function logWhenClicked() {
		console.log("Image was clicked!");
	}
	return (
		<div>
			<Logo appName="Kara's Pokedex" clickImgFunction={logWhenClicked} />
			<BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
			<CaughtPokemon date={new Date().toLocaleDateString()} />
		</div>
	);
}

export default App;
