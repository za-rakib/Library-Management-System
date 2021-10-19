import React from "react";
import { useParams } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import UpdateIssueBook from "../UpdateIssueBook/UpdateIssueBook";
import classes from "./BookDetails.module.css";

const BookDetails = ({ issueBooks }) => {
  let { bookId } = useParams();
  const hasData = issueBooks.length > 0;
  const findBook = hasData && issueBooks.find((book) => book._id === bookId);
  // hasData && console.log("Issue Books", issueBooks[0].bookName);

  // console.log("Book Info", findBook);

//modal
const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}
function closeModal() {
  setIsOpen(false);
}

  return (
    <div className={`container-fluid ${classes.bookDetails}`}>
      <div className="row">
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9 p-0">
          <div className={`text-center ${classes.title}`}>
            <h1 className="pt-4">
              {" "}
              <span>IST</span> Library Management System
            </h1>
          </div>
          <div>
            <div className="text-center">
              <h2 className={`mt-3 ${classes.infoTitle}`}>Book Details</h2>
              <div className={`${classes.underLine}`}></div>
            </div>
            <div className={`mt-5 ${classes.bookInfo}`}>
              <h3>
                <span>Student Name : </span>    {findBook.studentName}
              </h3>
              <h3>
                <span>Book Name :</span>  {findBook.bookName}
              </h3>
              <h3>
                <span>Semester :</span> {findBook.semester}
              </h3>
              <h3>
                <span>Department : </span> {findBook.department}
              </h3>
              <h3>
                <span>Roll : </span>
                {findBook.roll}
              </h3>
              <h3>
                <span>Issue Date : </span> {findBook.issueDate}
              </h3>
              <h3>
                <span>Return Date :</span> {findBook.returnDate}
              </h3>
            </div>
          </div>
          <div className="d-flex">
            <button onClick={openModal} className={`${classes.updateBtn} btn`}>Update</button>

            <button type="button" className={`${classes.deletedBtn} btn`}>Delete</button>
            </div>

            <UpdateIssueBook
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            findBook ={findBook}
            />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
