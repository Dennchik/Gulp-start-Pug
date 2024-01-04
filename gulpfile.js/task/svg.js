//* Svg processing
// const svgSprit = require('gulp-svg-sprite');
const svg = () => {
	return $.gulp.src($.path.svg.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "Svg",
				message: error.message
			}))
		}))
		.pipe($.gul.svgmin($.app.svgMin))
		.pipe($.gul.cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe($.gul.replace('&gt;', '>'))
		.pipe($.gul.svgSprite($.app.svg)).on(
			'error', function (error) {
				console.log(error);
			})
		// .pipe(svgSprit({
		// 	// generator: function ($) {

		// 	// }
		// 	mode: {

		// 		shape: {
		// 			dest: 'intermediate-svg', // Keep the intermediate files. Main output directory
		// 			id: { // SVG shape ID related options
		// 				generator: 'icon',
		// 				separator: '-', // Separator for directory name traversal
		// 				generator: function ($) {
		// 					$('svg-').render('icon-');
		// 				}, // SVG shape ID generator callback
		// 				pseudo: '~' // File name separator for shape states (e.g. ':hover')
		// 			},

		// dimension: {
		// 	maxWidth: 32,
		// 	maxHeight: 32
		// },
		// spacing: {
		// 	padding: 0,
		// 	box: 'content'
		// },
		// 		},
		// 		stack: {
		// 			dest: './svg',
		// 			sprite: 'sprite.svg',
		// 			prefix: ".icon-",
		// 			dimensions: "-dim",
		// 			symbol: true,
		// example: true
		// 			render: {
		// 				scss: {
		// 					dest: '../../../#src/scss/core/_sprite.scss',
		// template: "#src/scss/core/_sprite-template.scss"

		// 					template: "#src/scss/core/_sprite-template.scss"
		// 				}
		// 			}
		// 		}
		// 	},
		// }
		// ))
		.pipe($.gulp.dest($.path.svg.dest));
};
module.exports = svg;