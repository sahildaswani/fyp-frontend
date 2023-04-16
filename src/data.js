const models = {
	ResNet50: {
		accuracy: {
			Normal: 93.53,
			Cataract: 85.25,
			Myopia: 83.82,
		},
		description:
			"This model is trained using the ResNet50 model and can classify between normal, cataract and myopia. It has an average accuracy of 87.53%.",
	},
	VGG16: {
		accuracy: {
			Normal: 92.0,
			Cataract: 81.8,
			Myopia: 75.36,
		},
		description:
			"This model is trained using the VGG16 model and can classify between normal, cataract and myopia. It has an average accuracy of 83.05%.",
	},
	VIT: {
		accuracy: {
			Normal: 95.2,
			Cataract: 95.08,
			Myopia: 84.06,
		},
		description:
			"This model is trained using a vision transformer model that can classify between normal, cataract and myopia. It has an average accuracy of 91.78%.",
	},
};

export default models;
