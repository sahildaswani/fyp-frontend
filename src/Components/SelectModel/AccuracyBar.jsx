import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const getColor = (accuracy) => {
	if (accuracy < 80) return "error";
	if (accuracy < 90) return "warning";
	return "success";
};

const AccuracyBar = ({ label, accuracy }) => {
	console.log(accuracy);
	return (
		<div style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: "10px" }}>
			<Typography variant="subtitle1" color="grey" sx={{ minWidth: "70px" }}>
				{label}
			</Typography>
			<Box sx={{ width: "100%", m: 2 }}>
				<LinearProgress
					variant="determinate"
					value={accuracy}
					color={getColor(accuracy)}
					sx={{ height: "10px", borderRadius: "10px" }}
				/>
			</Box>
			<Typography variant="h6" color="grey">
				{accuracy.toFixed(2)}%
			</Typography>
		</div>
	);
};

export default AccuracyBar;
