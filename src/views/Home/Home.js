import React from 'react'
import "./Home.css"


import GadgetCard from "../../components/GadgetCard/GadgetCard"
import { PRODUCTS ,MAIN_TITLE, PRODUCT_LIST} from '../../config/data'

function Home() {
  return (
    <div>
      <h1 className="title">
        {MAIN_TITLE}
      </h1>
      <div className="gadget1-card">
        <h2>
          {PRODUCT_LIST}
        </h2>
        <div className="gadget-card-container">

          {PRODUCTS.map((gadgetItem) => {

            return <GadgetCard
              imgUrl={gadgetItem.imgUrl}
              title={gadgetItem.title}
              description={gadgetItem.description}
              isSmall={gadgetItem.isSmall}
              price={gadgetItem.price}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home