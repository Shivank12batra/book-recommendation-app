import React, { useState } from "react";
import "./styles.css";

var books = {
  Javascript: [
    {
      name: "YDKJS",
      description:
        "With this book you will: Learn the essential programming building blocks, including operators, types, variables, conditionals, loops, and functions. Become familiar with JavaScript's core mechanisms such as values, function closures, this, and prototypes.",
      rating: "5/5"
    },
    {
      name: "Eloquent Javascript",
      description:
        "As an introduction to JavaScript, this book hits all the basics: variables, functions, arrays/objects, classes, etc. In addition, there are chapters on regular expressions, error handling, and Node JS.",
      rating: "4.5/5"
    },
    {
      name: "Javascript: The Good Parts",
      description:
        "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole--a subset you can use to create truly extensible and efficient code.",
      rating: "3.5/5"
    }
  ],
  Fiction: [
    {
      name: "Harry Potter",
      description:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
      rating: "5/5"
    },
    {
      name: "Lord Of The Rings",
      description:
        "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
      rating: "4/5"
    },
    {
      name: "Percy Jackson",
      description:
        "Twelve-year-old Percy Jackson is on the most dangerous quest of his life. With the help of a satyr and a daughter of Athena, Percy must journey across the United States to catch a thief who has stolen the original weapon of mass destruction — Zeus' master bolt.",
      rating: "3.5/5"
    }
  ],
  Football: [
    {
      name: "The Mixer",
      description:
        "The Mixer: The Story of Premier League Tactics, from Route One to False Nines (English, Paperback, Cox Michael) An absolutely essential book for every modern football fan, about the development of Premier League tactics, published to coincide with 25 years of the competition.",
      rating: "4/5"
    },
    {
      name: "Soccermatics",
      description:
        "Soccer is the most mathematical of sports--riddled with numbers, patterns, and shapes. How to make sense of them? The answer lies in mathematical modeling, a science with applications in a host of biological systems. Soccermatics brings the two together in a fascinating, mind-bending synthesis.",
      rating: "3.5/5"
    },
    {
      name: "Inverting The Pyramid",
      description:
        "Inverting the Pyramid is a pioneering soccer book that chronicles the evolution of soccer tactics and the lives of the itinerant coaching geniuses who have spread their distinctive styles across the globe.",
      rating: "3/5"
    }
  ]
};

export default function App() {
  var [genre, setGenre] = useState("Javascript");

  function genreClickHandler(genre) {
    setGenre(genre);
    // setIsActive(true);
  }

  return (
    <div className="App">
      <h1>📚 Book Recommendation</h1>
      <p>
        Checkout out my favorite books and their respective ratings from
        different genres 👋
      </p>
      {Object.keys(books).map((genre) => (
        <button key={genre} onClick={() => genreClickHandler(genre)}>
          {genre}
        </button>
      ))}
      <hr></hr>
      <ul>
        {books[genre].map((book) => {
          return (
            <li key={book.name}>
              <div>
                <h2>{book.name}</h2>
              </div>
              <div style={{ margin: " 0.5rem 0rem" }}>{book.description}</div>
              <div style={{ color: "green" }}>rating: {book.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}