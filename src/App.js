import React, { useState } from "react";
import "./main.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import TopTen from "./components/TopTen";

const App = () => {
  //Call 3rd party API for cards
  // const MY_KEY = process.env.REACT_APP_API_KEY;
  const [showTopTenFiction, setShowTopTenFiction] = useState(false);

  const toggleFictionTopTen = () => {
    setShowTopTenFiction(!showTopTenFiction);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <p onClick={toggleFictionTopTen}>Fiction Top 10</p>
        <div className="container">{showTopTenFiction ? <TopTen /> : ""}</div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
