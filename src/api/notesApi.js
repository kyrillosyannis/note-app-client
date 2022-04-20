import {API_BASE_URL,
    handleError,
    handleNoContentResponse,
    handleResponse,
} from './apiUtils';

const BASE_URL = API_BASE_URL + '/notes';

const headerAttributes = {
    'Accept': 'application/json, text/plain',
    'Content-Type': 'application/json;charset=UTF-8',
};

export const fetchAllNotes = (pageNumber) => {
    return fetch(`${BASE_URL}?pageNumber=${pageNumber}`, {
        headers: {...headerAttributes},
    })
        .then(handleResponse)
        .catch(handleError);
};

export const createNote = note => {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {...headerAttributes},
        body: JSON.stringify(note),
    })
        .then(handleResponse)
        .catch(handleError);
}

export const updateNote = note => {
  return fetch(`${BASE_URL}/${note.id}`, {
      method: 'PUT',
      headers: {...headerAttributes},
      body: JSON.stringify(note),
  })
      .then(handleResponse)
      .catch(handleError);
};

export const deleteNote = note => {
    return fetch(`${BASE_URL}/${note.id}`, {
        method: 'DELETE',
        headers: {...headerAttributes},
    })
        .then(handleNoContentResponse)
        .catch(handleError);
};
