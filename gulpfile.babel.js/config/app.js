const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const pugbem = require('gulp-pugbem');
const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
	isProd: isProd,
	isDev: isDev,

	webpack: {
		mode: isProd ? 'production' : 'development',
		entry: {
			main: './#src/js/main.js',
			app: './#src/js/app.js',
			svgbody: './#src/js/module/svg4everybody.js'
		},
	},
	pug: {
		pretty: isDev,
		plugins: [pugbem],
		// data: {
		// 	link: require('../../#src/temp/data.json')
		// }
	},

	htmlMin: {
		collapseWhitespace: isProd,
	},

	js: {
		ext: {
			src: '.js',
			min: '.min.js'
		}
	},

	renameScss: {
		extname: '.css',
		suffix: '.min',
	},

	svgMin: {
		js2svg: {
			pretty: true
		}
	},

	svg: {
		shape: {
			id: {
				preview: false,
				generator: "icon-%s",
				separator: '-'
			},

			dimension: {
				maxWidth: 32,
				maxHeight: 32
			},
			spacing: {
				padding: 0,
				box: 'content'
			},

			dest: 'intermediate-svg' // Keep the intermediate files
		},
		// transform: [{
		// 	svgo: {
		// 		plugins: [{
		// 			addAttributesToSVGElement: {
		// 				attribute: "mySvg"
		// 			},

		// 			name: 'preset-default',
		// 			params: {
		// 				removeViewBox: false,
		// 				removeUnusedNS: false,
		// 				removeUselessStrokeAndFill: true,
		// 				cleanupIDs: false,
		// 				removeComments: true,
		// 				removeEmptyAttrs: true,
		// 				removeEmptyText: true,
		// 				collapseGroups: true,
		// 				removeAttrs: { attrs: '(fill|stroke|style)' },
		// 			}

		// 		}
		// 		]
		// 	}
		// }],

		mode: {
			stack: {
				dest: './svg',
				sprite: './sprite.svg',
				example: true
				// render: {
				// 	scss: {
				// 		dest: '../../../#src/scss/core/_sprite.scss',
				// 		template: "sprite-template.scss"
				// 	}
				// }
			}
		},
	},

	fonter: {
		// formats: ['woff', 'ttf', 'eot', 'svg', 'otf'],
		formats: ['woff', 'ttf', 'svg', 'otf'],
	},

	autoprefixer: {
		cascade: false,
		grid: 'auto-place',
		overrideBrowserslist: [
			'last 3 versions',
			// 'Android >= 5',
			// 'Firefox >= 24',
			// 'Safari >= 6',
			// 'Opera >= 12',
		],
	},

	imagemin: {
		verbose: true,
		interlaced: true,
		progressive: true,
		optimizationLevel: 5,
	}[
		recompress({
			loops: 6,
			min: 50,
			max: 90,
			quality: 'high',
			use: [
				pngquant({
					quality: [0.8, 1],
					strip: true,
					speed: 1,
				}),
			],
		})
	],
};
