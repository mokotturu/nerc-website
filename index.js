const attractions = [
	{
		name: 'Tsongas Center',
		location: '300 Martin Luther King Jr. Way',
		description: 'This multi-purpose arena is home to the NCAA Division I UMass Lowell River Hawks ice hockey team and hosts multiple events such as concerts, family events, sporting events, etc.',
		img: 'tsongas-center.jpg',
	},
	{
		name: 'Lowell National Historic Park',
		location: '67 Kirk Street',
		description: 'Established in 1978, Lowell National Historical Park preserves the American Industrial Revolution in Lowell in a unique fashion. The park offers visitors an in-depth look into the textile industry that was the heart of the city with a working cotton mill exhibit, canal boat tours, and trolley rides to move you around the city.',
		img: 'lowell-national-historic-park.jpg',
	},
	{
		name: 'National Streetcar Museum',
		location: '25 Shattuck Street',
		description: 'If you love railroads, history, transit, and Lowell, or if you want to learn about how public transport has evolved in Lowell over the years, this museum is for you! It boasts interactive exhibits and displays, especially the hands-on activities. Their knowledgeable volunteers will answer any questions visitors have, and give a guided tour of their displays.',
		img: 'national-streetcar-museum.jpg',
	},
	{
		name: 'Boott Cotton Mills Museum',
		location: '115 John Street',
		description: 'The Boott Cotton Mills Museum at Lowell National Historical Park is the best place to learn about Lowell\'s industrial past. Explore the stories of the workers, engineers, inventors, and investors who made Lowell the first successful planned industrial city in the United States. Learn more about the city\'s role as a cutting-edge developer of technology and hub of social and economic change in the American Industrial Revolution.',
		img: 'boott-cotton-mills-museum.jpg',
	},
]

// resize hero image
resizeHeroImg();

window.addEventListener('resize', resizeHeroImg);
window.addEventListener('scroll', e => {
	const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
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
let attractionId = Number(localAttractionsElem.dataset.locationId);
localAttractionsElem.style.backgroundImage = `url(img/${attractions[attractionId].img})`;
document.querySelector('#location-name').innerHTML = attractions[attractionId].name;
document.querySelector('#location-description').innerHTML = attractions[attractionId].description;
document.querySelector('#location-location').innerHTML = attractions[attractionId].location;

function handleLocationLeftClick() {
	let nextAttractionId = Number(localAttractionsElem.dataset.locationId) - 1;
	if (nextAttractionId === -1) nextAttractionId = 3;
	localAttractionsElem.style.backgroundImage = `url(img/${attractions[nextAttractionId].img})`;
	document.querySelector('#location-name').innerHTML = attractions[nextAttractionId].name;
	document.querySelector('#location-description').innerHTML = attractions[nextAttractionId].description;
	document.querySelector('#location-location').innerHTML = attractions[nextAttractionId].location;
	localAttractionsElem.dataset.locationId = nextAttractionId;
}

function handleLocationRightClick() {
	let nextAttractionId = (Number(localAttractionsElem.dataset.locationId) + 1) % 4;
	localAttractionsElem.style.backgroundImage = `url(img/${attractions[nextAttractionId].img})`;
	document.querySelector('#location-name').innerHTML = attractions[nextAttractionId].name;
	document.querySelector('#location-description').innerHTML = attractions[nextAttractionId].description;
	document.querySelector('#location-location').innerHTML = attractions[nextAttractionId].location;
	localAttractionsElem.dataset.locationId = nextAttractionId;
}


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
	}
}

function handleScrollToTopClick() {
	window.scrollTo(0, 0);
}
