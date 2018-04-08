import fetch from 'dva/fetch';

const BASE_URL = 'http://localhost:5173';

function transformData(data) {
  const form = global.document.createElement('form');
  const formData = new global.FormData(form);

  for (const key in data) {
    if (data[key]) {
      formData.append(key, data[key]);
    }
  }

  return formData;
}

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function request(api, options) {
  return fetch(`${BASE_URL}${api}`, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => (data));
}

export default function post(api, body = {}) {
  return request(api, { method: 'POST', body: transformData(body) });
}
