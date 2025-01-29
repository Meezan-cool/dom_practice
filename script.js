// let h1Comp = document.querySelector('#main-title');
// let item = document.querySelectorAll('.item');

// h1Comp.textContent = 'Dom Manipulation'
// h1Comp.style.color = 'red';

// 154
// let ul = document.querySelectorAll('.item');  
// console.log(ul)
// for(let list of ul){
//     console.log(list)
// }
// let ul2 = document.querySelectorAll('li');  
// console.log(ul2)
// for(let list of ul2){
//     // console.log(list)
// }

// let ul1 = document.getElementsByTagName('li');
// console.log(ul1)

// let ul = document.querySelector('ul');

// let newLi = document.createElement('li');
// newLi.textContent = 'Text1';
// ul.appendChild(newLi);
// console.log(ul1)
// console.log(ul2)

// It shows all nodes also text nodes
// let ul = document.querySelector('ul')
// console.log(ul.childNodes)

// Use Case Of Closest
// let ul = document.querySelector('ul');
// console.log(ul.parentElement('body'))

// Use Case Of Parent Node
// let li = document.querySelector('li');
// console.log(li.parentNode)

// Use Case Of Siblings
// let ul = document.querySelector('ul');
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)

// Getting Element from Traversal Dom 
// let ul = document.body.firstElementChild.firstElementChild.nextElementSibling;
// let firstLi = ul.firstElementChild
// console.log(firstLi)
// But in future if changes happen then the target element would not look like it

// Create Element Via HTML
// let unList = document.querySelector('.un_list');
// let toggleBtn = document.getElementById('un_btn');

// toggleBtn.addEventListener('click', ()=>{
//     unList.classList.toggle('invisible')
// })


// unList.innerHTML = unList.innerHTML + '<li>Item 4</li>'

// unList.insertAdjacentHTML('beforeend','<li>Item 5</li>')

// Create Element via CreateElement()
// let newLi = document.createElement('li');
// let newLiLatest = document.createElement('li');
// let newLi1 = document.createElement('li');
// let newLi2 = document.createElement('li');
// let newLiAfter = document.createElement('li');
// newLiLatest.textContent = `Item 00`;
// newLi.textContent = `Item 6 (Generated Via append())`;
// newLi1.textContent = `Item 8 (Generated Via before())`;
// newLiAfter.textContent = `Item 8 (Generated Via after())`;
// newLi.style.backgroundColor = 'blue'
// newLi.style.color = 'white'
// unList.appendChild(newLi);
// unList.prepend('Item 0');
// unList.lastElementChild.before(newLi1)
// unList.lastElementChild.after(newLiAfter)
// unList.firstElementChild.replaceWith(newLiLatest)

// let newLiAdjacent = document.createElement('li');
// newLiAdjacent.textContent = `Item 100 Using insertElement`

// unList.insertAdjacentElement('beforeend',newLiAdjacent)
// unList.insertAdjacentElement('afterend',newLiAdjacent)
// console.log(unList)
// let newUl = unList.cloneNode(true)
// let heading = document.createElement('h1');
// heading.textContent = 'New'
// let container = document.querySelector('.container');
// container.appendChild(newUl)
// container.append(heading);

// 1 Method
// newUl.remove()

// 2 Method of removing element 
// newUl.parentElement.removeChild(newUl)
// console.log(newUl.previousSibling)




const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

// array for movie storage
const movies = [];

// Backdrop toggle
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

// Text Box Showcase
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

// Movie deletion with togglebackdrop
const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

// Deletion of Movie 
const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModal();
  updateUI();
};

// 
const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();

  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

//   confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId)); // will not work :(
    
  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  // function() {}
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
