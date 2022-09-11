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

  if(containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  }
  else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
