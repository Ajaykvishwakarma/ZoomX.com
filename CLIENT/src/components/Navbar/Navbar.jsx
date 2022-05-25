import { Menu, Dropdown, Space } from 'antd';
import { CaretDownOutlined, TwitterOutlined} from '@ant-design/icons';

import { Button } from 'antd';
import 'antd/dist/antd.css';
// import style from './Navbar.module.css';
import React, { useState } from "react";
import "./Navbar.css";
import { Badges } from '../Cart/CartBadge';
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";


const menu = (
  <Menu id='all_products'>
  <div id='all_category'>
    <div>
     <NavLink to="/photobook">
      <div>
        <h3 >PhotoBooks</h3>
        <p>All Photobooks items</p>
        <button className="menuBtn">View all</button>
      </div>
      </NavLink>
    </div>
    <div>
    <NavLink to="/stationary">
    <div>
        <h3>Stationaries</h3>
        <p>Find your besties</p>
        <button className="menuBtn">View all</button>
      </div>
      </NavLink>
    </div>
    <div>
      <NavLink to="/calender">
    <div>
        <h3>Calenders</h3>
        <p>Frames on your date</p>
        <button className="menuBtn">View all</button>
      </div>
      </NavLink>
    </div>
    <div>
    <NavLink to="/cardstock">
      <div>
        <h3>Card Stock</h3>
        <p>All card items</p>
        <button className="menuBtn">View all</button>
      </div>
      </NavLink>
    </div>
    <div>
    <NavLink to="/display">
    <div>
        <h3>Display</h3>
        <p>Display all products</p>
        <button className="menuBtn">View all</button>
      </div>
      </NavLink>
    </div>

  </div>
  </Menu>
);

const AllProduct = () => (
  <Dropdown overlay={menu} style={{width:"100%", border:"1px solid red"}}>
    {/* <a href="" onClick={e => e.preventDefault()}> */}
      <Space>
        All Products
        <CaretDownOutlined style={{marginTop:"10px"}}/>
      </Space>
    {/* </a> */}
  </Dropdown>
);

export const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(true);
  let user =  JSON.parse(localStorage.getItem('userName'))  || "";
  let username = user.split("@")
  
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>Z</span>oom
            <span>X</span>.com
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
            {AllProduct()}
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/photobook">Personalized</NavLink>
            </li>
            <li>
              <NavLink to="/display">Occasions</NavLink>
            </li>
            <li>
              <NavLink to="/trackorder">Track order</NavLink>
            </li>
            <li style={{marginLeft:"20px"}}>
              <NavLink to="/signup"> |  Sign up  </NavLink>
            </li>
           
            <li>
              <NavLink to="/signin"><Button >Sign in</Button></NavLink>
            </li>
             <li>
              <NavLink to="/cart"> <Badges /> </NavLink>
            </li>
            <li>
               {username[0]}
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li>
              {"    "}
            </li>
            <li>
              <NavLink to="/cart"> <Badges /> </NavLink>
            </li>
          </ul> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
        
      </nav>

      
    </>
  );
};


