import {
    HTTP, HTTPS, SWAPI_ROOT, SWAPI_PEOPLE,
    GUIDE_IMG_EXTENSION, URL_IMG_PERSON, SWAPI_PARAM_PAGE
} from '@constants/api';

//-----------------------------------------------
// Проверка протокола: HTTP или HTTPS
//-----------------------------------------------
const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

//-----------------------------------------------
// Получить ID персонажа по URL
//-----------------------------------------------
const getId = (url, category) => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol+SWAPI_ROOT+category, '')
        .replace(/\//g, '')

    return id;
}

//-----------------------------------------------
// Проверка индификатора и возвращение текущей страницы
//-----------------------------------------------
export const getPeoplePageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length);

    return Number(id);
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;
