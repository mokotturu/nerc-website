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
];

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
let firstAttractionId = Number(localAttractionsElem.dataset.locationId);

// local attractions left button
document
	.querySelector('#location-btn-left-click')
	.addEventListener('click', () => {
		let attractionId = Number(localAttractionsElem.dataset.locationId);
		let nextAttractionId = attractionId - 1;
		if (attractionId - 1 <= -1) nextAttractionId = 3;
		localAttractionsElem.dataset.locationId = nextAttractionId;

		document
			.querySelector(`#${attractions[attractionId].id}`)
			.classList.toggle('flex');
		document
			.querySelector(`#${attractions[attractionId].id}`)
			.classList.toggle('hidden');
		document
			.querySelector(`#${attractions[attractionId].id}`)
			.classList.toggle('inView');
		document
			.querySelector(`#${attractions[nextAttractionId].id}`)
			.classList.toggle('flex');
		document
			.querySelector(`#${attractions[nextAttractionId].id}`)
			.classList.toggle('hidden');
	});

// local attractions right button
document
	.querySelector('#location-btn-right-click')
	.addEventListener('click', () => {
		let attractionId = Number(localAttractionsElem.dataset.locationId);
		let nextAttractionId = (attractionId + 1) % 4;
		localAttractionsElem.dataset.locationId = nextAttractionId;

		document
			.querySelector(`#${attractions[attractionId].id}`)
			.classList.toggle('flex');
		document
			.querySelector(`#${attractions[attractionId].id}`)
			.classList.toggle('hidden');
		document
			.querySelector(`#${attractions[attractionId].id}`)
			.classList.toggle('inView');
		document
			.querySelector(`#${attractions[nextAttractionId].id}`)
			.classList.toggle('flex');
		document
			.querySelector(`#${attractions[nextAttractionId].id}`)
			.classList.toggle('hidden');
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
