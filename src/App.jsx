import { useState, useCallback } from "react";
import Divider from "@mui/material/Divider";
import Header from "./Components/Header";
import SelectModels from "./Components/SelectModel/SelectModel";
import ImageUpload from "./Components/ImageUpload";
import models from "./data";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from "./particlesjs-config";

function App() {
	const modelNames = Object.keys(models);
	const [model, setModel] = useState(modelNames[0]);

	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<div className="App">
			<Header />
			<div className="container">
				<Particles
					id="tsparticles"
					init={particlesInit}
					loaded={particlesLoaded}
					options={options}
				/>
				<SelectModels model={model} setModel={setModel} />
				<Divider flexItem sx={{ m: 2 }} />
				<ImageUpload model={model} />
			</div>
		</div>
	);
}

export default App;
