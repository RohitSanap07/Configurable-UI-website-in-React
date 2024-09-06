import React from 'react'
import './GadgetCard.css'
import smallDic from "./off-shop-now-transparent-offer.png"
import bigDic from "./get-extra-25-off.png"

function GadgetCard({ imgUrl, title, description, isSmall, price }) {

  return (
    <div className="gadget-card">
      <img
        src={imgUrl}
        className="gadget-img"
        alt="gadget" />

      <h1 className="gadget-card-title">{title}</h1>
      <p>{description}</p>

      <img src={isSmall ? smallDic : bigDic}
        className="gadget-icon"
        alt="Dic" />

      {
        price ?
          <p className="gadget-card-price">
            ₹ {price}
          </p>
          : "NOT AVAILABLE"
      }

      <button className="gadget-card-btn">
        Add to Cart
      </button>
    </div>
  )
}

export default GadgetCard