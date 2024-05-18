import dilogo from "./assets/demeureinsolite_logo.svg";
import "./App.css";

function App() {
	return (
		<>
			<div>
				<img src={dilogo} className="logo" alt="Vite logo" />
			</div>
			<h1>Bienvenue sur le site officiel de Demeure insolite</h1>
			<div className="card">
				<button>Réserver</button>
				<p>
					Bientot vous pourrez réserver nos logement a Gruissan ou dans les
					Corbières directement depuis le site sans intermédiare et au meilleur
					prix
				</p>
			</div>
			<p className="read-the-docs">demeureinsolite@gmail.com</p>
		</>
	);
}

export default App;
