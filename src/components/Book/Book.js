import React from 'react';
import { updateBookShelfStatus } from '../../store/actions/books';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';

export default function Book({ book }) {
  const dispatch = useDispatch();
  const handleChange = (event, id) => {
  
    dispatch(updateBookShelfStatus(id, event.target.value));
  };
  return (
    <div className="col">
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
            }}
          >
            <img
              src={book?.imageLinks.thumbnail}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="book-shelf-changer">
            <select onChange={(e) => handleChange(e, book.id)}>
              <option value="none">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book?.author}</div>
        <div className="book-authors">{book?.title}</div>
      </div>
    </div>
  );
}
