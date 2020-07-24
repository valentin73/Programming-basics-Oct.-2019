function createArticle() {
	const titleInput = document.getElementById('createTitle');
	const paragrapthInput = document.getElementById('createContent');
	const articles = document.getElementById('articles');

	const titleValue = titleInput.value;
	const paragraphValue = paragrapthInput.value;

	if(titleValue == false || paragraphValue == false){
		return;
	}

	const newArticle = document.createElement('article');
	const heading = document.createElement('h3');
	const paragraph = document.createElement('p');

	newArticle.appendChild(heading);
	newArticle.appendChild(paragraph);
	articles.appendChild(newArticle);

	heading.innerText = titleValue;
	paragraph.innerText = paragraphValue;

	titleInput.value = '';
	paragrapthInput.value = '';
	
}