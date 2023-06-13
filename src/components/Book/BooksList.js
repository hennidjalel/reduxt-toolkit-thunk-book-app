import React from "react";
import { BeatLoader } from "react-spinners";
import { useSelector } from "react-redux";

const BooksList = ({ isLoading, data, deleteBook, getBookId, dispatch }) => {
  const { isLogin } = useSelector((state) => state.auth);

  const bookList =
    data.length > 0
      ? data.map((item) => {
          return (
            <li
              className="list-group-item d-flex  justify-content-between align-items-center"
              key={item.id}
            >
              <div>{item.title}</div>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => getBookId(item.id)}
                >
                  Read
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  disabled={!isLogin}
                  onClick={() =>
                    dispatch(deleteBook(item))
                      .unwrap()
                      .then((originalPromiseResult) => {
                        console.log(originalPromiseResult);
                      })
                      .catch((rejectedValueOrSerializedError) => {
                        console.log(rejectedValueOrSerializedError);
                      })
                  }
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })
      : "There is no book available";

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? (
        <BeatLoader color="#496ef0" size={10} />
      ) : (
        <ul className="list-group">{bookList}</ul>
      )}
    </div>
  );
};

export default BooksList;
