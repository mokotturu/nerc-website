// resize hero image
resizeHeroImg();

window.addEventListener('resize', resizeHeroImg);
window.addEventListener('scroll', e => {
	const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
	if (window.scrollY != 0) {
		scrollToTopBtn.classList.add('inView');
	} else {
		scrollToTopBtn.classList.remove('inView');
	}
});

// set background image for local attractions
const localAttractionsElem = document.querySelector('#local-attractions-card');
const attractions = localAttractionsElem.children;
console.log(attractions);
let firstAttractionId = Number(localAttractionsElem.dataset.locationId);

// local attractions left button
document
	.querySelector('#location-btn-left-click')
	.addEventListener('click', () => {
		let attractionId = Number(localAttractionsElem.dataset.locationId);
		let nextAttractionId = attractionId - 1;
		if (attractionId - 1 <= -1) nextAttractionId = attractions.length - 1;
		localAttractionsElem.dataset.locationId = nextAttractionId;

		attractions[attractionId].classList.toggle('flex');
		attractions[attractionId].classList.toggle('hidden');
		attractions[nextAttractionId].classList.toggle('flex');
		attractions[nextAttractionId].classList.toggle('hidden');
	});

// local attractions right button
document
	.querySelector('#location-btn-right-click')
	.addEventListener('click', () => {
		let attractionId = Number(localAttractionsElem.dataset.locationId);
		let nextAttractionId = (attractionId + 1) % attractions.length;
		localAttractionsElem.dataset.locationId = nextAttractionId;

		attractions[attractionId].classList.toggle('flex');
		attractions[attractionId].classList.toggle('hidden');
		attractions[nextAttractionId].classList.toggle('flex');
		attractions[nextAttractionId].classList.toggle('hidden');
	});

// mobile nav hamburger menu
document.querySelectorAll('.mobile-nav-link').forEach(elem => {
	elem.addEventListener('click', handleNavClick);
});

function resizeHeroImg() {
	document.querySelector('#hero').style.height = `${window.innerHeight}px`;
	document.querySelector('#main-wrapper').style.top = `${
		document.querySelector('nav').offsetHeight
	}px`;
}

// handle mobile navbar menu icon click
function handleNavClick() {
	const mobileNavItems = document.querySelector('#mobile-nav-items');
	if (mobileNavItems.classList.contains('h-0')) {
		// open
		mobileNavItems.style.height = `${mobileNavItems.scrollHeight}px`;
		mobileNavItems.classList.remove('h-0');
	} else {
		// close
		mobileNavItems.style.height = `0px`;
		mobileNavItems.classList.add('h-0');
		document.querySelectorAll('.mobile-nav-overflow-item').forEach(elem => {
			elem.classList.toggle('inView');
		});
	}
}

document.querySelector('#scroll-to-top-btn').addEventListener('click', () => {
	window.scrollTo(0, 0);
});
