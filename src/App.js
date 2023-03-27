import React, { useState } from "react";
import axios from "axios";
import "./main.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const App = () => {
  //Call 3rd party API for cards
  const MY_KEY = process.env.REACT_APP_API_KEY;

  const getCurrentFictionBooks = () => {
    const results = axios
      .get("http://localhost:5000/books/currentFiction")
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  };

  const currentFictionBooks = getCurrentFictionBooks();

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container"></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
