import React, { useContext } from "react";
import { UserContext } from "../../App";
import istLogo from "../../image/ist.png";
import Button from "../UI/Button/Button";
import classes from "./Navbar.module.css";
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(setLoggedInUser);
  return (
    <nav className={`container-fluid ${classes.nav}`}>
      <div className="row">
        <div className="col-md-9">
          <div className="ms-5 mt-2 d-flex justify-content-start">
            <div className={classes.logo}>
              <img src={istLogo} alt="" />
            </div>
            <div className={`ms-3 ${classes.name}`}>
              <h3 >
                Institute of Science & Technology (IST)
              </h3>
              <h6 style={{color:'#dfdfdf'}}>A Center of Excellence for Education</h6>
            </div>
          </div>
        </div>
        <div className={`col-md-3 d-flex ${classes.navLeft}`}>
          <div className='ms-3 me-3'>
          <Button>Log Out</Button>
          </div>
          <div>
            <h3 style={{ color: "#fee10f" }} className="mt-2">{loggedInUser.name}</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
