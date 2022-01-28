module.exports = {
	content: ['./src/**/*.{html,js}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				primary: '#ff6363',
				secondary: {
					100: '#e2e2d5',
					200: '#888883',
				},
			},
			fontFamily: {
				nunito: ['Nunito Sans'],
			},
		},
	},
	plugins: [],
};
