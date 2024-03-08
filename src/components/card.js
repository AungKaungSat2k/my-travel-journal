import React from "react";
import "../css/card.css"

export default function Card(props) {
    return(
        <div className="card">
            <img src={`../../images/${props.travelImg}`} />
            <div className="card--info">
                <div>
                    <img src="../../images/location.png" className="card--location"/>
                    <span>{props.location}</span>
                    <a href="https://maps.app.goo.gl/FL4oR5djCGJDQCmY8" className="map--link">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h3>{props.date}</h3>
                <p className="card--p">{props.description}</p>
            </div>
        </div>
    )
}