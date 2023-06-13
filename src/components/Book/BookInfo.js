import React, { Fragment } from "react";

const BookInfo = ({ infoBook }) => {
  console.log(infoBook);
  return (
    <Fragment>
      <h2>Book Details</h2>
      {Object.values(infoBook).length > 0 ?
      <div>
          <p className="fw-bold">Title: {infoBook.title}</p>
          <p className="fw-bold">insertedBy: {infoBook.userName}</p>
          <p className="fw-light">Description: {infoBook.desc} </p>
          <p className="fst-italic">Price: {infoBook.price}</p>
        </div> :
        <div className="alert alert-secondary" role="alert">
        There is no book selected yet. Please select!
      </div>
        }
      
   
    </Fragment>
  );
};

export default BookInfo;
