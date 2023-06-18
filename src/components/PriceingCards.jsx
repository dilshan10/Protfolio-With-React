import "./PriceingCardsStyles.css";

import React from "react";
import {Link} from "react-router-dom";

const PriceingCards = () =>{
    return(
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>-- Basic --</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 99</p>
                    <p>- 4 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Desidn -</p>

                    <Link to="/contact" className="btn">PURCHASE NOW</Link>
                </div>

                <div className="card">
                    <h3>-- Premium --</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 199</p>
                    <p>- 3 Days -</p>
                    <p>- 5 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Desidn -</p>

                    <Link to="/contact" className="btn">PURCHASE NOW</Link>
                </div>

                <div className="card">
                    <h3>-- Business --</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 299</p>
                    <p>- 8 Days -</p>
                    <p>- 8 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Desidn -</p>

                    <Link to="/contact" className="btn">PURCHASE NOW</Link>
                </div>

            </div>
        </div>
    )
}

export default PriceingCards