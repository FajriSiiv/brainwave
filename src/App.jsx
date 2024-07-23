import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefit from "./components/Benefit";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefit />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
