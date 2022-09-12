// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function () {
	// linksContainer.classList.toggle('show-links');   // This approach works but does not allow for dynamic changing of height of linksContainer
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;

	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});

// ********** fixed navbar ************
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
	const scrollHeight = window.pageYOffset;
	const navHeight = navBar.getBoundingClientRect().height;

	if (scrollHeight > navHeight) {
		navBar.classList.add('fixed-nav');
	} else {
		navBar.classList.remove('fixed-nav');
	}

	if (scrollHeight > navHeight) {
		topLink.classList.add('show-link');
	} else {
		topLink.classList.remove('show-link');
	}
});

// ********** smooth scroll ************
const scrollLink = document.querySelectorAll('.scroll-link');

scrollLink.forEach(function (link) {
	link.addEventListener('click', function (e) {
		// prevent default scroll behaviour
		e.preventDefault();

		// navigate to specific section
		// the slice(1) cuts the string starting at index of 1 (cuts off the #)
		const id = e.currentTarget.getAttribute('href').slice(1);
		const element = document.getElementById(id);

    // calculate the heights
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains('fixed-nav');

		let position = element.offsetTop - navHeight;

    if(!fixedNav) {
      position = position - navHeight;
    }
    if(navHeight > 82) {
      position = position + containerHeight;
    }

		window.scrollTo({
			left: 0,
			top: position,
		});

    // This hides the nav bar after section button is clicked. 
    // Enhances user experience
    linksContainer.style.height = 0;
	});
});
