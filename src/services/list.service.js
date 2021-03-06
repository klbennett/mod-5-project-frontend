import { authHeader } from "../helpers";

export const listService = {
  createList,
  getList,
  addToList,
  getUsersLists,
  deleteList,
  deleteListItem
};

const backendURL = process.env.REACT_APP_BACKEND_URL;

function createList(title) {
  const requestOptions = {
    method: "POST",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json",
      mode: "no-cors"
    },
    body: JSON.stringify({ title })
  };

  return fetch(backendURL + "/createlist", requestOptions).then(handleResponse);
}

function getList(id) {
  const requestOptions = {
    method: "GET",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json",
      mode: "no-cors"
    }
  };

  return fetch(backendURL + `/list/${id}`, requestOptions).then(handleResponse);
}

function getUsersLists() {
  // debugger
  const requestOptions = {
    method: "GET",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json",
      mode: "no-cors"
    }
  };

  return fetch(backendURL + `/userlists`, requestOptions).then(handleResponse);
}

function deleteList(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json",
      mode: "no-cors"
    }
  };

  return fetch(backendURL + `/list/${id}`, requestOptions).then(handleResponse);
}

function deleteListItem(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json",
      mode: "no-cors"
    }
  };

  return fetch(backendURL + `/listitem/${id}`, requestOptions).then(
    handleResponse
  );
}

function addToList(listItem, listId) {
  // debugger
  const requestOptions = {
    method: "POST",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json",
      mode: "no-cors"
    },
    body: JSON.stringify({
      ...listItem,
      list_id: listId
    })
  };
  return fetch(backendURL + `/createlistitem`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
