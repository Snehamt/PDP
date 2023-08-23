import React from "react";
import { BsFillBagHeartFill, BsFillCartFill } from "react-icons/bs";

function Card({ img, title, star, reviews, prevPrice, newPrice, company }) {
  return (
    <>
      <section className="card">
        <img
          src={img} 
          alt={company}
          className="card-img"
        />
        <div className="effect"><div className="text">SHOP NOW</div></div>
        <div className="rating"><section className="card-reviews">
           4{star}<span className="total-reviews"><span className="mark">|</span> {reviews}</span>
          </section></div>
        <div className="card-details">
          <h3 className="card-brand">{company}</h3>
          <h6 className="card-title">{title}</h6>

          <section className="card-price">
            <div className="price">
            {newPrice} <del className="prevprice">{prevPrice}</del>
            </div>

            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" title="add to wishlist" />
            </div>
            <div className="cart">
              <BsFillCartFill className="cart-icon" title="add to cart" />
            </div>
          </section>

          
        </div>
      </section>
    </>
  );
}

export default Card;
