import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuData } from './MenuData';
import './navigation.css';

export default function NavigationComponent() {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const navLogo = 'Bekzod Tolipov';

  const navLinks = MenuData;

  const changeHamburger = () => {
    setIsHamburgerClicked(!isHamburgerClicked);
  };

  return (
    <nav className='NavbarItems'>
      <h1 className='logo'>
        <Link to='about' className='logo-links'>
          {navLogo}
        </Link>
      </h1>

      <div className='menu-icons' onClick={changeHamburger}>
        <i
          className={
            isHamburgerClicked ? 'fas fa-times fa-3x' : 'fas fa-bars fa-3x'
          }
        ></i>
      </div>

      <ul className={isHamburgerClicked ? 'nav-menu active' : 'nav-menu'}>
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link
                to={link.url}
                className={link.className}
                onClick={changeHamburger}
              >
                <i className={link.iconClassName}></i> {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/*
const navLogo = 'Println("I go by Bek")';
  const navLinks = [
    { title: 'Work', className: 'nav-link active', subTitle: [], isShow: true },
    {
      title: 'Play',
      className: 'nav-link',
      subTitle: ['Todo-App'],
      isShow: true,
    },
    { title: 'About', className: 'nav-link', subTitle: [], isShow: true },
  ];

  return (
    <div className='navigation-container'>
      <div className='row nav-row'>
        <div className='col-md-6'>
          <span className='nav-logo'>{navLogo}</span>
        </div>
        <div className='col-md-4'>
          <ul className='nav justify-content-end'>
            {navLinks.map((link, index) => {
              return (
                <li key={index} className='nav-item'>
                  <a className={link.className} href='/#'>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='col-md-2'>
          <button className='btn login-btn'>Login</button>
        </div>
      </div>
    </div>
  );

*/
