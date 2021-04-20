import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
	const abilities = ["Anticipation", "Adaptability", "Run-Away"];
	const date = new Date().toLocaleDateString();
	return (
		<div>
			<Logo appName = "Kara's Pokedex"/>
			<BestPokemon abilities = {abilities}/>
			<CaughtPokemon date = {date}/>
		</div>
	);
}

export default App;