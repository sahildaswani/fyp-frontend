import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Header = () => {
	return (
		<Paper
			sx={{
				p: 2,
				margin: "auto",
				flexGrow: 1,
				backgroundColor: "#625C5C",
				borderRadius: "0px",
				textAlign: "center",
				zIndex: 1,
			}}
		>
			<Typography variant="h4" sx={{ color: "#fff" }}>
				Ocular Disease Cassification
			</Typography>
		</Paper>
	);
};

export default Header;
