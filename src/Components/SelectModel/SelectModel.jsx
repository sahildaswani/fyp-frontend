import { useMemo } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import AccuracyBar from "./AccuracyBar";
import models from "../../data";

const SelectModels = ({ model, setModel }) => {
	const modelNames = Object.keys(models);
	const accuracy = useMemo(() => models[model].accuracy, [model]);

	return (
		<>
			<FormControl sx={{ m: "30px", maxWidth: 500 }}>
				<InputLabel id="model-native-simple">Model</InputLabel>
				<Select
					value={model}
					defaultValue={model}
					onChange={(e) => setModel(e.target.value)}
					labelId="model-native-simple"
					label="Model"
					variant="outlined"
				>
					{modelNames.map((modelName) => (
						<MenuItem key={modelName} value={modelName}>
							{modelName}
						</MenuItem>
					))}
				</Select>
				<FormHelperText>{models[model].description}</FormHelperText>
			</FormControl>
			<Paper sx={{ m: 1, width: "75%", p: 2, borderRadius: "20px" }}>
				<Typography variant="h6">Accuracy</Typography>
				{Object.keys(accuracy).map((label) => (
					<AccuracyBar key={label} label={label} accuracy={accuracy[label]} />
				))}
			</Paper>
		</>
	);
};

export default SelectModels;
