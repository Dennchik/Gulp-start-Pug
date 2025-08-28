// Get the modal
const modal = document.getElementById('myModal');

var imgs = document.querySelectorAll('#myImg');
console.log(imgs);
for (let i = 0; i < imgs.length; i++) {
	const img = imgs[i];
	img.onclick = function (e) {
		modal.style.display = "block";
		console.log('yes');
	};
}


// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function () {
// 	modal.style.display = "block";
// 	modalImg.src = this.src;
// 	// captionText.innerHTML = this.alt;
// };

// // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
};