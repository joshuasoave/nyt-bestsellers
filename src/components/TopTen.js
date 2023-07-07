import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

//this is gonna be where you pass in fantasy or sci fi or whatever
//based on what is passed in, it will call the appropriate API
//and then display the top 10 books

const TopTen = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [topTen, setTopTen] = useState([]);
  const getCurrentFictionBooks = () => {
    return axios
      .get("http://localhost:5000/books/currentFiction")
      .then((response) => {
        console.log(response.data, "response.data");
        return response.data;
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await getCurrentFictionBooks();
        const allBooks = booksData?.results?.books;
        setAllBooks(allBooks);
        const topTenBooks = allBooks?.slice(0, 10);
        setTopTen(topTenBooks);
      } catch (error) {
        // Handle error if the promise is rejected
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {topTen.map((book) => {
        return (
          <div className="topTenContainer">
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <img className="bookCover" src={book.book_image} alt={book.title} />
          </div>
        );
      })}
    </div>
  );
};

export default TopTen;
