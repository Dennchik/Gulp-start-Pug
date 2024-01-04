//* Image processing
const image = () => {
	return $.gulp.src($.path.image.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "Image",
				message: error.message
			}))
		}))
		.pipe($.gul.newer($.path.image.dest))
		.pipe($.gul.webp())
		.pipe($.gulp.dest($.path.image.dest))
		.pipe($.gulp.src($.path.image.src))
		.pipe($.gul.newer($.path.image.dest))
		.pipe($.gulpIf($.app.isProd, $.gul.size({ title: "До сжатия-Image:" })))
		.pipe($.gulpIf($.app.isProd, $.gul.imagemin($.app.imagemin)))
		.pipe($.gulpIf($.app.isProd, $.gul.size({ title: "После сжатия-Image:" })))
		.pipe($.gulp.dest($.path.image.dest));
};
module.exports = image;
// const svgSprite = require('gulp-svg-sprite');
// const config = {
// 	shape: {
// 		dimension: { // Set maximum dimensions
// 			maxWidth: 32,
// 			maxHeight: 32
// 		},
// 		spacing: { // Add padding
// 			padding: 10
// 		},
// 		dest: 'out/intermediate-svg' // Keep the intermediate files
// 	},
// 	mode: {
// 		view: { // Activate the «view» mode
// 			bust: false,
// 			render: {
// 				scss: true // Activate Sass output (with default options)
// 			}
// 		}, symbol: true
// 	}
// };