const models = {
	ResNet50: {
		accuracy: {
			Normal: 94.4,
			Cataract: 90.16,
			Myopia: 79.71,
		},
		description:
			"This model is trained using the ResNet50 model and can classify between normal, cataract and myopia. It has an average accuracy of 88.09%.",
	},
	VGG16: {
		accuracy: {
			Normal: 92.0,
			Cataract: 91.8,
			Myopia: 75.36,
		},
		description:
			"This model is trained using the VGG16 model and can classify between normal, cataract and myopia. It has an average accuracy of 86.39%.",
	},
	VIT: {
		accuracy: {
			Normal: 95.2,
			Cataract: 95.08,
			Myopia: 84.06,
		},
		description:
			"This model is trained using a vision transformer model that can classify between normal, cataract and myopia. It has an average accuracy of 91.45%.",
	},
};

export default models;
