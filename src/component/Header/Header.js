import React from 'react';
import { Link } from 'react-router-dom';
import './../../style/Header.css';
import icon from './../../assets/shelfie_icon.png';

export default function Header() {
  return (
    <div className='Header'>
        <img src={icon} alt='logo' />
        <h1>Shelfie</h1>

        <div className="links">
            <div ><Link className="a" to='/'>Dashboard</Link></div>
            <div ><Link className="b" to='/add'>Add Inventory</Link></div>
        </div>
    </div>
  )
}
