import {picturesData} from './main.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const creatMiniatures = () => {
  const fragment = document.createDocumentFragment();

  picturesData.forEach((picture) => {
    const newPicture = pictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = picture.url;
    newPicture.querySelector('.picture__img').alt = picture.description;
    newPicture.querySelector('.picture__likes').textContent = picture.likes;
    newPicture.querySelector('.picture__comments').textContent = picture.comments.length;
    newPicture.id = picture.id;

    fragment.appendChild(newPicture);
  });

  pictures.appendChild(fragment);
};

export {creatMiniatures};
