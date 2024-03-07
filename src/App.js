import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";

export default function App() {
  return(
    <div>
      <Navbar/>
      <section className="cards--list">
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  )
}