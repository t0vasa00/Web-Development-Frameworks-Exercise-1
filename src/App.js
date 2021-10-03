import React from "react";
import './App.css';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import NewsNotifications from "./components/NewsNotifications";
import SideSection from "./components/SideSection";

function App() {
  return (
    <div>
      <Header />
      <NewsNotifications topic="HS-ANALYYSI" body="Vastaako yksi suomalainen hävittäjä kymmentä venäläistä?" />
      <NewsNotifications topic="PÄIVÄN TIMANTTI" body="Rikolliset jakavat nyt valtaa uusiksi" />
      <NewsNotifications topic="MAINOS" body="Lunasta kaksi viikkoa ilmaista lukuaikaa"/>
      <MainSection />
      <SideSection />
    </div>
  );
}

export default App;
