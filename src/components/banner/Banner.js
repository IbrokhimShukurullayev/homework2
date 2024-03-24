import React from "react";
import { MdNavigateNext } from "react-icons/md";
import iphone15 from '../../assets/images/hero_iphone15pro__i70z9oz3hj2i_largetall.jpg'
import "./banner.css"


function Banner() {
    return(
        <div id="banner">
            <div className="container">
                <div className="banner">
                    <h1 className="banner__title">
                        iPhone 15 Pro
                    </h1>
                    <p className="banner__text">
                        Titanium. So strong. So light. So Pro.
                    </p>
                    <div className="banner__link">
                        <div className="banner__link__div">
                            <a href="#">Learn more</a>
                            <MdNavigateNext className="next" />
                        </div>
                        <div className="banner__link__div">
                            <a href="#">Buy</a>
                            <MdNavigateNext className="next"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner