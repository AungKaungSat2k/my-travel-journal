import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import data from "./components/data";
import "./css/App.css"; 

export default function App() {
  const cards = data.map( journal => {
    return (
      <Card
        key={journal.id}
        {...journal}
      />
    )
  })
  return(
    <div className="app--page">
      <Navbar/>
      <section className="cards--list">
        {cards}
      </section>
    </div>
  )
}