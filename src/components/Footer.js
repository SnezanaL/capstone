import img from './../assets/images/Mario and Adrian A.jpg';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer container">
      <div className="col image">
        <img src={img}/>
      </div>
      <div className="col links">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </div>
      <div className="col links">
      <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="">Address</a></li>
          <li><a href="">003 300 44</a></li>
          <li><a href="">email@gmail.com</a></li>
        </ul>
      </div>
      <div className="col links">
      <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="">Facebook</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Facebook</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
