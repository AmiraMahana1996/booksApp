import axiosInstance from './../../axios/config';

export const getAllBooks = () => (dispatch) => {
  return axiosInstance.get('/books').then(
    (res) => {
      dispatch({ type: 'GET_BOOKS', payload: res.data.books });
    },
    (err) => console.log('err')
  );
};

export const updateBookShelfStatus = (id, shelf) => (dispatch) => {
  return axiosInstance
    .put(`/books/${id}`, {
      params: {
        shelf: shelf,
      },
      shelf,
    })
    .then(
      (res) => {
        dispatch({
          type: 'UPDATE_BOOK_SHELF_STATUS',
          payload: res,
        });
      },
      (err) => console.log('err')
    );
};

export const searchBook = (query) => (dispatch) => {
  console.log(query)
  return axiosInstance
    .get(`/books`, {
      params: {
        query: query,
        maxResults:4
      },
     
    })
    .then(
      (res) => {
        dispatch({
          type: 'SEARCH_BOOK',
          payload: res.data.books,
        });
      },
      (err) => console.log('err')
    );
};
