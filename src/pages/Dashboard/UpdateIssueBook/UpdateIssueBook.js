import React from "react";
import Modal from "react-modal";
import classes from "./UpdateIssueBook.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const UpdateIssueBook = ({ modalIsOpen, closeModal, findBook}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={`text-center ${classes.title}`}>
          {" "}
          <h2>
            {" "}
            <span>Book</span> Information
          </h2>{" "}
        </div>
        <form className ={`${classes.form}`}>
          <input
            placeholder="Student Name"
            className="form-control"
            type="text"
            defaultValue={findBook.studentName}
            // {...register("department", { required: true })}
          />
        </form>
      </Modal>
    </div>
  );
};

export default UpdateIssueBook;
