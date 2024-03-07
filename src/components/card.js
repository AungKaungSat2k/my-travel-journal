import React from "react";
import "../css/card.css"

export default function Card() {
    return(
        <div className="card">
            <img src="../../images/japan.png"/>
            <div className="card--info">
                <div>
                    <img src="../../images/location.png" className="card--location"/>
                    <span>J A P A N</span>
                    <a href="https://maps.app.goo.gl/FL4oR5djCGJDQCmY8" className="map--link">View on Google Maps</a>
                </div>
                <h1>Mount Fuji</h1>
                <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}