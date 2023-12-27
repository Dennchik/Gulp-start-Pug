import fs from "fs";

let file_content = fs.readFileSync($.path.fonts.dest);
if (file_content == '') {
	fs.writeFile($.path.fontsStyle.src, '', cb);
	return fs.readdir($.path.fontsStyle.dest, function (err, items) {
		if (items) {
			let c_fontName;
			for (let i = 0; i < items.length; i++) {
				let fontName = items[i].split('.');
				fontName = fontName[0];
				if (c_fontName != fontName) {
					fs.appendFile($.path.fontsStyle.src, '@include("' + fontName + '")');
				}
				c_fontName = fontName;
			}
		}
	});
}
// -----------------------------------------------------------------------------
// const fontsStyle = (done) => {
//    const cb = () => { };
//    $.fs.writeFile($.path.fontsStyle.src, '', cb);
//    $.fs.readdir($.path.fontsStyle.dest, function (err, items) {
//       if (items) {
//          let c_fontname;
//          for (let i = 0; i < items.length; i++) {
//             let fontname = items[i].split('.');
//             fontname = fontname[0];
//             if (c_fontname !== fontname) {
//                $.fs.appendFile($.path.fontsStyle.src, '@include font-face("' + fontname + '", "' + fontname + '", 400,  "normal");\r\n', cb);
//             }
//             c_fontname = fontname;
//          }
//       }
//    });
//    done();
// };