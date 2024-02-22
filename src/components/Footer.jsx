import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo.png';
export default function Footer() {
  const links = [
    { title: 'About', data: ['About', 'Terms', 'Legal'] },
    { title: 'NFT', data: ['OpenSea', 'Maker', 'Learn'] },
    { title: 'Contact', data: ['Press', 'Support'] },
    { title: 'Social', data: ['Twitter', 'Instagram'] },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2024 NFT</span>
        <span>Kelvy Corrêa 2024</span>
      </div>
    </footer>
  );
}
