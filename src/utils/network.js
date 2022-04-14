import { HTTP, HTTPS } from "@constants/api";

/**
 * Изменяет URL с HTTP на HTTPS 
 * @param {string} url - url для изменения
 * @returns {string} - url с HTTPS
 */

export const changeHTTP = url => {
    const resault = url ? url.replace(HTTP, HTTPS) : url;
    return resault;
}

/**
 * Отправляет запрос Fetch
 * @param {String} url - ссылка для запроса
 * @returns {Promise} - Promise с результатом запроса 
 */

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Йоу! Could not fetch.', res.status);
            return false;
        }

        return await res.json(); 
    } catch (error) {
        console.error('Йоу! Could not fetch.', error.message);
        return false;
    }
}


export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));

    return res;
}
