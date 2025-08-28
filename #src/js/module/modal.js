export default function modal() {
	const mainSlides = document.querySelectorAll(".mainslide__slide");
	const modal = document.querySelector('.modal');
	mainSlides.forEach(mainSlide => {
		let img = mainSlide.querySelector("img");
		img.onclick = function (e) {
			let target = e.target;
			let sourse = target.closest('.content-mainslide__image').querySelector('source').srcset;
			if (!target.closest('.mainslide__slide').classList.contains('swiper-slide-active')) {
				console.log('not active');
				e.preventDefault();
			} else {
				modal.classList.add('_show');
				console.log(sourse);
				let modalImg = modal.querySelector('.modal__image');
				modalImg.src = this.src;
				console.log(modalImg.src);
				modal.querySelector('source').srcset = sourse;
				var span = modal.querySelector("span");
				span.onclick = function () {
					modal.classList.remove('_show');
				};
			}
		};
	});
}
