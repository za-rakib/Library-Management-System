import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./IssueBook.module.css";
import { useForm } from "react-hook-form";
import Button from "../../../components/UI/Button/Button";

const IssueBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    //console.log(e);
    const url = `https://ist-library-management.herokuapp.com/issueBook`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(e),
    })
    .then(response => response.json())
    .then (result => {
      if(result){
        alert("Booked Issue successfully")
      }
    })
    .catch(error => {
      console.log(error);
    })
  };

  return (
    <div className={`container-fluid ${classes.issueBook}`}>
      <div className="row">
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9 " style={{ background: "#1a2c56" }}>
          <h1
            className={`${classes.issueHeader} d-flex justify-content-center mt-3`}
          >
            Institute of Science & Technology (IST)
          </h1>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${classes.issueForm} p-5 mt-5 `}
            >
              <input
                placeholder="Student Name"
                className="form-control"
                type="text"
                {...register("studentName")}
              />
              {errors.exampleRequired && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
              <br />
              <input
                placeholder="Department"
                className="form-control"
                type="text"
                {...register("department", { required: true })}
              />

              <br />
              <input
                placeholder="Student Semester"
                className="form-control"
                type="text"
                {...register("semester", { required: true })}
              />

              <br />
              <input
                placeholder="Student Email"
                className="form-control"
                type="text"
                {...register("Email", { required: true })}
              />

              <br />
              <input
                placeholder="Books Name"
                className="form-control"
                type="text"
                {...register("bookName", { required: true })}
              />

              <br />
              <input
                placeholder="Books Issue Date"
                className="form-control"
                type="date"
                {...register("date", { required: true })}
              />
              <br />
              <Button type="submit"> Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueBook;
