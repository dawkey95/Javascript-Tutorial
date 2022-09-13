const about = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
	const id = e.target.dataset.id;
	if (id) {
		// remove active from all buttons
		tabBtns.forEach(function (btn) {
			btn.classList.remove('active');
			e.target.classList.add('active');
		});

		// hide all articles and display matching id
		articles.forEach(function (article) {
			article.classList.remove('active');
		});
		const element = document.getElementById(id);
    element.classList.add('active');
	}
});
