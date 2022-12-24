import React, { useEffect } from 'react';

import Book from './../../components/Book/Book';

import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks, searchBook } from './../../store/actions/books';
import './booksStyle.css';
export default function Books() {
  const books = useSelector((state) => {
    return state.books;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, [books]);

  const handlesEARCHChange = (event) => {
    dispatch(searchBook(event.target.value));
  };
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
          <br />
          <input
            type="text"
            placeholder="Search.."
            className="search"
            onChange={(e) => handlesEARCHChange(e)}
          />
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              {
                <div className="bookshelf-books">
                  {books.map((book, index) => {
                    if (book.shelf === 'currentlyReading')
                      return <Book key={index} book={book} />;
                  })}
                </div>
              }
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                {books?.map((book, index) => {
                  if (book.shelf === 'wantToRead')
                    return <Book key={index} book={book} />;
                })}
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                {books.map((book, index) => {
                  if (book.shelf === 'read')
                    return <Book key={index} book={book} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="open-search"></div>
      </div>
    </>
  );
}
