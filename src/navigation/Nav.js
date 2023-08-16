import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

function Nav({ handleInputChange, query }) {
  return (
    <header>
      <div className="header-top mobile-hide">
        <div className="container">
          <div className="wrapper flexitem">
            <div className="left">
              <ul className="flexitem main-links">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Featured Products</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul className="flexitem main-links">
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Order Tracking</a>
                </li>
                <li>
                  <a href="#">
                    USD
                    <span className="icon-small">
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                  </a>
                  <ul>
                    <li className="current">
                      <a href="#">USD</a>
                    </li>
                    <li>
                      <a href="#">EURO</a>
                    </li>
                    <li>
                      <a href="#">GBP</a>
                    </li>
                    <li>
                      <a href="#">IDR</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    English
                    <span className="icon-small">
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                  </a>
                  <ul>
                    <li className="current">
                      <a href="#">English</a>
                    </li>
                    <li>
                      <a href="#">German</a>
                    </li>
                    <li>
                      <a href="#">Spanish</a>
                    </li>
                    <li>
                      <a href="#">Kannada</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-nav">
        <div className="container">
          <div className="wrapper flexitem">
            <a href="#" className="trigger desktop-hide">
              <span className="i ri-menu-2-line"></span>
            </a>
            <div className="left flexitem">
              <div className="logo">
                <a href="/">
                  <span className="circle"></span>.Shopping
                </a>
              </div>
              <nav className="mobile-hide">
                <ul className="flexitem second-links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="has-child">
                    <a href="#">
                      Women
                      <div className="icon-small">
                        <i className="ri-arrow-down-s-line"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Men
                      <div className="icon-small">
                        <i className="ri-arrow-down-s-line"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Kids
                      <div className="icon-small">
                        <i className="ri-arrow-down-s-line"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sports
                      <div className="fly-item">
                        <span>New!</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <input
                type="text"
                className="search-input"
                onChange={handleInputChange}
                value={query}
                placeholder="Enter your Search..."
              />
            </div>
            <div className="right">
              <ul className="flexitem second-links">
                <li className="mobile-hide">
                  <a href="#">
                    <div className="icon-large">
                      <i className="ri-heart-line"></i>
                    </div>
                    <div className="fly-item">
                      <span className="utem-number">0</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="iscart">
                    <div className="icon-large">
                      <i className="ri-shopping-cart-line"></i>
                      <div className="fly-item">
                        <span className="utem-number">0</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
