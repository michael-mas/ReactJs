import React from 'react';
import { Link } from 'react-router-dom';
import "./noodleGlobal.css"
import { Search } from './Search';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="boxNav">
    <div className="wrapperNav">
      <Link to="/" className='link'>
        <p className="logoNoodle">
          Noodl 🍜
        </p>
      </Link>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="buttonLum">{darkTheme ? '💡 Jour' : '🌙 Nuit'}</button>
    </div>
    <Search />
  </div>
);
