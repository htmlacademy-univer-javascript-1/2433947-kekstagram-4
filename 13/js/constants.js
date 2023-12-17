const descriptions = [
  'Отличная получилась фотография',
  'Чудесный день!',
  'Небо зараза какое синее',
  'Могу написать всё что угодно',
  'Хороший кадр',
  'Какой-то текст',
  'Хорошего всем дня!',
  'Вылазь из интернета и иди работай',
  'Хехе',
  'Мяу'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['София', 'Виктория', 'Кирилл', 'Илья', 'Максим', 'Денис', 'Анастасия', 'Кира'];

const validHashtag = /^#[a-zа-я0-9]{1,19}|^$/i;

const hashtagMaxCount = 5;

const hashtagErrorMessages = [
  'Использованы недопустимые символы или допущена ошибка в форме записи',
  'Один и тот же хэш-тег не может быть использован дважды',
  `Максимальное количесво хеш-тегов - ${hashtagMaxCount}`
];

const maxScaleValue = 100;
const minScaleValue = 25;
const scaleStep = 25;

export {descriptions, messages, names, validHashtag, hashtagMaxCount, hashtagErrorMessages, maxScaleValue, minScaleValue, scaleStep};
