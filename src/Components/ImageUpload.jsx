import { useState, useRef, useMemo } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const ImageUpload = ({ model }) => {
	const [image, setImage] = useState(null);
	const [file, setFile] = useState(null);
	const [crop, setCrop] = useState();
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState(null);

	const disabled = useMemo(() => {
		return !crop || crop?.width <= 50 || crop?.height <= 50 || loading;
	}, [crop, loading]);

	const cropData = useMemo(() => {
		const cropped = {};
		cropped.x = crop?.x / document.getElementById("image")?.width;
		cropped.y = crop?.y / 500;
		cropped.height = crop?.height / 500;
		cropped.width = crop?.width / document.getElementById("image")?.width;
		return cropped;
	}, [crop]);

	const inputFileRef = useRef(null);

	const handleImageChange = (e) => {
		const f = e.target.files[0];
		setFile(f);
		setCrop();
		setResult(null);
		const reader = new FileReader();

		reader.onload = (e) => {
			setImage(e.target.result);
		};

		reader.readAsDataURL(f);
	};

	const handleClearImage = () => {
		setImage(null);
		setFile(null);
		inputFileRef.current.value = null; // reset input element
	};

	const predict = async () => {
		setResult(null);
		setLoading(true);

		let formData = new FormData();
		formData.append("image", file);
		formData.append("crop", JSON.stringify(cropData));

		try {
			const res = await fetch(`http://127.0.0.1:5000/predict/${model.toLowerCase()}`, {
				method: "POST",
				body: formData,
			});

			const data = await res.json();

			setResult(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Button variant="contained" component="label" endIcon={<FileUploadIcon />}>
					{image ? "Change Image" : "Upload Image"}
					<input
						type="file"
						hidden
						onChange={handleImageChange}
						ref={inputFileRef}
						accept="image/*"
					/>
				</Button>
				{file && (
					<>
						<Typography variant="caption" sx={{ marginLeft: "1rem" }}>
							{file.name}
						</Typography>
						<ClearIcon sx={{ marginLeft: "1rem", cursor: "pointer" }} onClick={handleClearImage} />
					</>
				)}
			</Box>
			{image && (
				<>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							margin: "1rem",
							textAlign: "center",
						}}
					>
						<ReactCrop crop={crop} onChange={(c) => setCrop(c)} aspect={1}>
							<img
								src={image}
								alt="Uploaded"
								style={{ height: "500px", width: "auto" }}
								id="image"
							/>
						</ReactCrop>
						<Typography variant="caption" sx={{ marginLeft: "1rem" }}>
							Use the square selection to crop the fundus
						</Typography>
					</div>
					<div style={{ marginBottom: "1rem", textAlign: "center" }}>
						<Button variant="contained" disabled={disabled} onClick={predict}>
							{loading ? <CircularProgress size={24} /> : "Predict"}
						</Button>
						{result && (
							<Typography variant="h2" sx={{ m: 2 }}>
								Diagnosis: {result.class}
							</Typography>
						)}
					</div>
				</>
			)}
		</>
	);
};

export default ImageUpload;
