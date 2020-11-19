document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete');
  button.addEventListener('click', handleButtonClick);

})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const newListItem = document.createElement('li');
  newListItem.classList.add('flexbox');
  const newTitleItem = document.createElement('h2');
  const newAuthorItem = document.createElement('h3');
  const newCategoryItem = document.createElement('h4');
  newTitleItem.textContent = `Title: ${this.title.value}`
  newAuthorItem.textContent = `Author: ${this.author.value}`
  newCategoryItem.textContent = `Category: ${this.category.value}`

  const list = document.querySelector('#reading-list');
  list.appendChild(newListItem);
  newListItem.appendChild(newTitleItem);
  newListItem.appendChild(newAuthorItem);
  newListItem.appendChild(newCategoryItem);

  const form = document.querySelector('#new-item-form');
  form.reset();
}
const handleButtonClick = function () {
  console.log("button clicked");
  window.location.reload();
}