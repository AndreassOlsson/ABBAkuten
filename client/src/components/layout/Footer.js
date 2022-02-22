import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <Link to='/'>
        <div className='logo-big'></div>
      </Link>
      <div>
        <a href='https://www.instagram.com/ande_o/' className='light-font'>
          <i className='fab fa-instagram'></i>
          {''}
          ande_o
        </a>
        <p className='light-font'>andreas.o.olsson@outlook.com</p>
        <p className='banner light-font'>© 2021 Andreas Olsson</p>
      </div>
    </footer>
  );
};

export default Footer;
