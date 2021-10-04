import React from 'react';
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <div className={`d-flex justify-content-center ${classes.footer}`}>
      <h5 className='mt-3'>©2021 | Designed By : Rakib | All rights reserved</h5>
    </div>
  );
};

export default Footer;