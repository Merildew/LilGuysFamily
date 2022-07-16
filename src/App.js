import React from "react";
import "./App.css";
import { AboutSection } from "./components/About/AboutSection";
import { AmaSection } from "./components/Ama/AmaSection";
import { Header } from "./components/Header/Header";
import { MainSection } from "./components/Main/MainSection";
import { Title } from "./components/Titles/Title";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainSection />
      <AboutSection />
      {/* <Title title={`Музыка`} />
      <Title title={`Артисты`} />
      <Title title={`LilGuysHistory`} />
      <Title title={`Мерч`} /> */}
      <Title title={`AMA`} name="ama" />
      <AmaSection />
      <Title title={`Контакты`} />
    </div>
  );
}

export default App;
