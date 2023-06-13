import { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook, getBook } from "../../store/bookSlice";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";

const PostContainer = () => {
  const [selectedBook, setSelectedBook] = useState({});

  const dispatch = useDispatch();
  const { isLoading, books, bookInfo } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getBookId = (id) => {
    const selectedBook = books.find((book) => book.id === id);
    setSelectedBook((prev) => {
      return { ...prev, ...selectedBook };
    });
  };

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            data={books}
            deleteBook={deleteBook}
            dispatch={dispatch}
            getBookId={getBookId}
          />
        </div>
        <div className="col side-line">
          <BookInfo bookInfo={bookInfo} infoBook={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
