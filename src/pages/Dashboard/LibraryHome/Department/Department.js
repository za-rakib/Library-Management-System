import React from "react";
import cse from "../../../../image/cse.png";
import ece from "../../../../image/ece.jpg";
import bba from "../../../../image/bba.jpg";
import classes from "./Department.module.css";
import { Link } from "react-router-dom";

const departmentInfo = [
  {
    img: cse,
    name: "CSE",
  },

  {
    img: ece,
    name: "ECE",
  },
  {
    img: bba,
    name: "BBA",
  },
];
const Department = () => {
  return (
    <Link to="/addBook">
      <div className="row">
        {departmentInfo.map((department) => (
          <div className="col-md-4 text-center">
            <div className={`card ${classes.departmentCard}`}>
              <div>
                <img
                  className={`card-img-top ${classes.cardImg}`}
                  src={`${department.img}`}
                  alt=""
                />
              </div>
              <div className="card-body">
                <h1 className={`${classes.cardText}`}>{department.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default Department;
