import {pictures} from './draw-miniatures.js';
import {picturesData} from './main.js';
import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const closeButton = document.querySelector('.big-picture__cancel');

const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
/*
const createComments = (commentsData) => {
  const comments = document.createDocumentFragment();
  commentsData.forEach((comment) => {
    const newComment = bigPicture.querySelector('.social__comment').cloneNode(true);
    const commentImg = newComment.querySelector('.social__picture');
    const commentText = newComment.querySelector('.social__text');
    commentImg.src = comment.avatar;
    commentImg.alt = comment.name;
    commentText.textContent = comment.message;

    comments.appendChild(newComment);
  });

  commentsList.appendChild(comments);
};

const createBigPictureData = (evt) => {
  const miniature = picturesData.find((picture) => picture.id === evt.target.id);
  bigPicture.querySelector('.big-picture__img').src = miniature.url;
  bigPicture.querySelector('.likes-count').textContent = miniature.likes;
  bigPicture.querySelector('.comments-count').textContent = miniature.comments.length;
  createComments(miniature.comments);
  bigPicture.querySelector('.social__caption').textContent = miniature.description;
};

const onCloseButtonClick = () => {
  closeBigPicture();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture (evt) {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  createBigPictureData(evt);

  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', (event) => {
    onDocumentKeydown(event);
  });
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPicture.innerHTML = '';

  document.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', (event) => {
    onDocumentKeydown(event);
  });
}

const renderBigPicture = () => {
  pictures.addEventListener('click', (evt) => {
    openBigPicture(evt);
  });
};

export {renderBigPicture};
*/
const createComments = (commentsData) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  commentsData.forEach((comment) => {
    const newComment = document.createElement('li');
    newComment.classList.add('social__comment');

    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = comment.avatar;
    img.alt = comment.name;
    img.width = 35;
    img.height = 35;

    const p = document.createElement('p');
    p.classList.add('social__text');
    p.textContent = comment.message;

    fragment.appendChild(newComment);
  });

  commentsList.appendChild(fragment);
};

const createBigPictureData = (evt) => {
  const miniature = picturesData.find((picture) => picture.id === evt.target.dataset.miniatureId);
  bigPicture.querySelector('.big-picture__img').src = miniature.url;
  bigPicture.querySelector('.likes-count').textContent = miniature.likes;
  bigPicture.querySelector('.comments-count').textContent = miniature.comments.length;
  createComments(miniature.comments);
  bigPicture.querySelector('.social__caption').textContent = miniature.description;
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture (evt) {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  createBigPictureData(evt);

  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', closeBigPicture);
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPicture.innerHTML = '';

  document.removeEventListener('keydown', onDocumentKeydown);
}

const renderBigPicture = () => {
  pictures.addEventListener('click', openBigPicture);
};

export {renderBigPicture};
