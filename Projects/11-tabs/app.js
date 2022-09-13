const about = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
	const id = e.target.dataset.id;
	if (id) {
		// remove 'active' from all buttons and add 'active' to targeted button
		tabBtns.forEach(function (btn) {
			btn.classList.remove('active');
			e.target.classList.add('active');
		});

		// hide all articles
		articles.forEach(function (article) {
			article.classList.remove('active');
		});

    // create new element variable that get the 'id' from the dataset.id
    // so each article with that dataset id will be displayed accordingly
		const element = document.getElementById(id);
    element.classList.add('active');
	}
});
