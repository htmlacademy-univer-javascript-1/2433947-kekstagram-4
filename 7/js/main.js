import {getPhotoDescriptions} from './photo-descriptions.js';
import {creatMiniatures} from './draw-miniatures.js';
import {renderBigPicture} from './big-picture.js';

const picturesData = getPhotoDescriptions();
creatMiniatures();
renderBigPicture();

export {picturesData};
