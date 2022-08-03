import tsongasCenterImg from './img/tsongas-center.jpg';
import lowellNationalHistoricParkImg from './img/lowell-national-historic-park.jpg';
import nationalStreetcarMuseumImg from './img/national-streetcar-museum.jpg';
import boottCottonMillsMuseumImg from './img/boott-cotton-mills-museum.jpg';

const attractions = [
	{
		id: 'tsongas-center-content',
		img: tsongasCenterImg,
	},
	{
		id: 'lowell-national-historic-park-content',
		img: lowellNationalHistoricParkImg,
	},
	{
		id: 'national-streetcar-museum-content',
		img: nationalStreetcarMuseumImg,
	},
	{
		id: 'boott-cotton-mills-museum-content',
		img: boottCottonMillsMuseumImg,
	},
]

// resize hero image
resizeHeroImg();

window.addEventListener('resize', resizeHeroImg);
window.addEventListener('scroll', e => {
	const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
	if (window.scrollY != 0) {
		scrollToTopBtn.classList.add('inView');
		document.querySelectorAll('nav').forEach(elem => {
			elem.style.background = 'rgba(16, 37, 64, 0.7)';
		});
	} else {
		scrollToTopBtn.classList.remove('inView');
		document.querySelectorAll('nav').forEach(elem => {
			elem.style.background = 'initial';
		});
	}
});


// fade in on scroll animation using intersection observer
const domElements = document.querySelectorAll('body *');
domElements.forEach(elem => {
	if (!elem.classList.contains('noFadeInUp')) elem.classList.add('fadeInUp')
});

const fadeInElems = document.querySelectorAll('.fadeInUp');
const io = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting && !entry.target.classList.contains('noFadeInUp')) entry.target.classList.add('inView');
	});
});

fadeInElems.forEach(elem => io.observe(elem));


// set background image for local attractions
const localAttractionsElem = document.querySelector('#local-attractions-card');
let firstAttractionId = Number(localAttractionsElem.dataset.locationId);
localAttractionsElem.style.backgroundImage = `url(${attractions[firstAttractionId].img})`;

// local attractions left button
document.querySelector('#location-btn-left-click').addEventListener('click', () => {
	let attractionId = Number(localAttractionsElem.dataset.locationId);
	let nextAttractionId = attractionId - 1;
	if (attractionId - 1 <= -1) nextAttractionId = 3;
	localAttractionsElem.style.backgroundImage = `url(${attractions[nextAttractionId].img})`;
	localAttractionsElem.dataset.locationId = nextAttractionId;

	document.querySelector(`#${attractions[attractionId].id}`).classList.toggle('flex');
	document.querySelector(`#${attractions[attractionId].id}`).classList.toggle('hidden');
	document.querySelector(`#${attractions[attractionId].id}`).classList.toggle('inView');
	document.querySelector(`#${attractions[nextAttractionId].id}`).classList.toggle('flex');
	document.querySelector(`#${attractions[nextAttractionId].id}`).classList.toggle('hidden');
});

// local attractions right button
document.querySelector('#location-btn-right-click').addEventListener('click', () => {
	let attractionId = Number(localAttractionsElem.dataset.locationId);
	let nextAttractionId = (attractionId + 1) % 4;
	localAttractionsElem.style.backgroundImage = `url(${attractions[nextAttractionId].img})`;
	localAttractionsElem.dataset.locationId = nextAttractionId;

	document.querySelector(`#${attractions[attractionId].id}`).classList.toggle('flex');
	document.querySelector(`#${attractions[attractionId].id}`).classList.toggle('hidden');
	document.querySelector(`#${attractions[attractionId].id}`).classList.toggle('inView');
	document.querySelector(`#${attractions[nextAttractionId].id}`).classList.toggle('flex');
	document.querySelector(`#${attractions[nextAttractionId].id}`).classList.toggle('hidden');
});

// mobile nav hamburger menu
document.querySelectorAll('.mobile-nav-link').forEach(elem => {
	elem.addEventListener('click', handleNavClick);
});

function resizeHeroImg() {
	document.querySelector('#hero').style.height = `${window.innerHeight}px`;
	document.querySelector('#main-wrapper').style.top = `${document.querySelector('nav').offsetHeight}px`;
}

// handle mobile navbar menu icon click
function handleNavClick() {
	const mobileNavItems = document.querySelector('#mobile-nav-items');
	if (mobileNavItems.classList.contains('h-0')) {
		// open
		mobileNavItems.style.height = `${mobileNavItems.scrollHeight}px`;
		mobileNavItems.classList.remove('h-0');
		document.querySelectorAll('nav').forEach(elem => {
			elem.style.background = 'rgba(16, 37, 64, 0.7)';
		});
	} else {
		// close
		mobileNavItems.style.height = `0px`;
		mobileNavItems.classList.add('h-0');
		if (window.scrollY == 0) {
			document.querySelectorAll('nav').forEach(elem => {
				elem.style.background = 'initial';
			});
		}
		document.querySelectorAll('.mobile-nav-overflow-item').forEach(elem => {
			elem.classList.toggle('inView');
		});
	}
}

document.querySelector('#scroll-to-top-btn').addEventListener('click', () => {
	window.scrollTo(0, 0);
});
