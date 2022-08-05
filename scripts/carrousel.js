let animating;

const carrouselSlides = document.querySelector("[data-slides]").children;
let originalPrev;
let originalNext;
if (carrouselSlides.length > 1) {
	const lastSlide = carrouselSlides[carrouselSlides.length - 1];
	const secondSlide = carrouselSlides[1];
	lastSlide.style.animationName = "peakRight";
	lastSlide.style.opacity = "50%";
	secondSlide.style.animationName = "peakLeft";
	secondSlide.style.opacity = "50%";
	originalPrev = lastSlide;
	originalNext = secondSlide;
}

// Event listeners for next and previous buttons

const buttons = document.querySelectorAll("[data-carrousel-button]");

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (animating) return;
		animating = true;
		setTimeout(() => {
			animating = false;
		}, 400);
		const offset = button.dataset.carrouselButton === "next" ? 1 : -1;
		const slides = button
			.closest("[data-carrousel]")
			.querySelector("[data-slides]");
		const activeSlide = slides.querySelector("[data-active]");
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;
		const nextSlide = slides.children[newIndex];
		let nextNewIndex = [...slides.children].indexOf(nextSlide) + offset;
		if (nextNewIndex < 0) nextNewIndex = slides.children.length - 1;
		if (nextNewIndex >= slides.children.length) nextNewIndex = 0;
		const newNextSlide = slides.children[nextNewIndex];

		let prevNewIndex = [...slides.children].indexOf(activeSlide) - offset;
		if (prevNewIndex < 0) prevNewIndex = slides.children.length - 1;
		if (prevNewIndex >= slides.children.length) prevNewIndex = 0;
		const newPrevSlide = slides.children[prevNewIndex];

		if (offset === 1) {
			if (originalPrev) {
				originalPrev.style.animationName = "exitPeakLeft";
			} else {
				newPrevSlide.style.animationName = "exitPeakLeft";
			}
			originalPrev = null;
			activeSlide.style.animationName = "exitLeft";
			nextSlide.style.animationName = "enterLeft";
			newNextSlide.style.animationName = "peakLeft";
		} else {
			newPrevSlide.style.animationName = "exitPeakRight";
			originalPrev = null;
			activeSlide.style.animationName = "exitRight";
			nextSlide.style.animationName = "enterRight";
			newNextSlide.style.animationName = "peakRight";
		}
		nextSlide.dataset.active = true;
		delete activeSlide.dataset.active;
	});
});

buttons.forEach((button) => {
	button.addEventListener("keyup", (e) => {
		const nxt = document.querySelector('[data-carrousel-button="next"]');
		const prv = document.querySelector('[data-carrousel-button="prev"]');
		e.preventDefault();
		if (document.activeElement === nxt && (e.keyCode === 32 || e.keyCode == 13))
			nxt.click();
		if (document.activeElement === prv && (e.keyCode == 32 || e.keyCode == 13))
			prv.click();
		return false;
	});
});

const nxt = document.querySelector(".next");
const nxtI = document.querySelector(".next i");
const prv = document.querySelector(".prev");
const prvI = document.querySelector(".prev i");

// keystrokes for carrousel
nxt.addEventListener("keyup", (e) => {});
prv.addEventListener("keyup", (e) => {
	e.preventDefault();
});

// Beat styling
nxt.addEventListener("mouseover", (e) => {
	e.preventDefault();
	nxtI.classList.add("fa-beat");
	return false;
});
nxt.addEventListener("mouseleave", (e) => {
	e.preventDefault();
	nxtI.classList.remove("fa-beat");
	return false;
});
prv.addEventListener("mouseover", (e) => {
	e.preventDefault();
	prvI.classList.add("fa-beat");
	return false;
});
prv.addEventListener("mouseleave", (e) => {
	e.preventDefault();
	prvI.classList.remove("fa-beat");
	return false;
});

const imgs = document.querySelectorAll(".slide > img");

imgs.forEach((img) => {
	img.addEventListener("click", (e) => {
		const alt = e.target.alt;
		sessionStorage.setItem("propiedad", alt);
		e.preventDefault();
		location.href = "../propiedad.html";
	});
});

// alert('Este sitio se encuentra en construcción, el acceso es sólo para debugging')
