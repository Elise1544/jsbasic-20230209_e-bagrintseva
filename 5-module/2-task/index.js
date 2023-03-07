function toggleText() {
	const button = document.querySelector('.toggle-text-button'),
		text = document.querySelector('#text');

	button.addEventListener('click', () => {
		text.hidden = !text.hidden;
	});
}
