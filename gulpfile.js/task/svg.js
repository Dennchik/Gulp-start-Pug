//* Svg processing
const svg = () => {
	return $.gulp.src($.path.svg.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "Svg",
				message: error.message
			}))
		}))

		.pipe($.gul.svgSprite($.app.svg))
		.pipe($.gulp.dest($.path.svg.dest));
};
module.exports = svg;