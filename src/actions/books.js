import {
  CREATE_BOOK,
  RETRIEVE_BOOKS,
  UPDATE_BOOK,
  DELETE_BOOK
} from "./types";

import BookService from "../services/BookService";

export const createBook = (title, author) => async (dispatch) => {
  try {
    const res = await BookService.create({ title, author});

    dispatch({
      type: CREATE_BOOK,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveBooks = () => async (dispatch) => {
  try {
    const res = await BookService.getAll();

    dispatch({
      type: RETRIEVE_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateBook = (id, data) => async (dispatch) => {
  try {
    const res = await BookService.update(id, data);

    dispatch({
      type: UPDATE_BOOK,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    await BookService.remove(id);

    dispatch({
      type: DELETE_BOOK,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};


export const findBooksByTitle = (title) => async (dispatch) => {
  try {
    const res = await BookService.findByTitle(title);

    dispatch({
      type: RETRIEVE_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};