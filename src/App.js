import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import data from "./components/data";

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
    <div>
      <Navbar/>
      <section className="cards--list">
        {cards}
      </section>
    </div>
  )
}