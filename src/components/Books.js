import React, { useCallback, useEffect, useState } from "react";
import { Row } from "antd";
import { useDispatch, useSelector } from "react-redux";

import BookCard from "./BookCard";
import * as bookActions from "../store/actions/books";
import { useLocation } from "react-router-dom";

const bookAction = (pathname) => {
  let action;
  if (pathname === "/books") {
    action = bookActions.fetchBooks();
  }

  if (pathname === "/user/books") {
    action = bookActions.fetchBooks();
  }

  if (pathname === "/user/books/read") {
    action = bookActions.fetchBooks();
  }

  if (pathname === "/user/books/wishlist") {
    action = bookActions.fetchBooks();
  }

  return action;
};

const Books = (props) => {
  const location = useLocation();
  const books = useSelector((state) => state.books.books);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const loadBooks = useCallback(async () => {
    try {
      setIsLoading(true);
      await dispatch(bookAction(location.pathname));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, location.pathname]);

  useEffect(() => {
    loadBooks().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadBooks]);

  return (
    <div
      id="card-container"
      style={{
        display: "flex",
        margin: "10px",
      }}
    >
      <Row gutter={[16, 16]} style={{ width: "100%" }}>
        <BookCard books={books} isLoading={isLoading} />
      </Row>
    </div>
  );
};

export default Books;
