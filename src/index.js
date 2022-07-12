// resize hero image
resizeHeroImg();

window.addEventListener('resize', resizeHeroImg);

// fade in on scroll animation using intersection observer
const domElements = document.querySelectorAll('body *');
domElements.forEach(elem => {
	if (!elem.classList.contains('noFadeInUp')) elem.classList.add('fadeInUp')
});

const fadeInElems = document.querySelectorAll('.fadeInUp');
const io = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) entry.target.classList.add('inView');
	});
});

fadeInElems.forEach(elem => io.observe(elem));

function resizeHeroImg() {
	document.querySelector('#hero').style.height = `${window.innerHeight - document.querySelector('nav').offsetHeight}px`;
}

// handle mobile navbar menu icon click
function handleNavClick() {
	const mobileNavItems = document.querySelector('#mobile-nav-items');
	if (mobileNavItems.classList.contains('h-0')) {
		mobileNavItems.style.height = `${mobileNavItems.scrollHeight}px`;
		mobileNavItems.classList.remove('h-0');
	} else {
		mobileNavItems.style.height = `0px`;
		mobileNavItems.classList.add('h-0');
	}
}
