import React, { useState, useEffect } from "react";

import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");

  let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const getQuotes = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);

        const allDataQuotes = data.quotes;
        const randomNum = Math.floor(Math.random() * allDataQuotes.length);
        const randomQuote = allDataQuotes[randomNum];
        console.log(randomQuote);

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
      .catch((err) => console.error("Sorry"));
  };

  const getColor = () => {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * colors.length);
      hexColor = hexColor + colors[random];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  useEffect(() => {
    document.body.style.background = color;
  }, [color]);

  return (
    <>
      <div id="quote-box">
        <div id="quote-text">
          <FaQuoteLeft
            style={{
              fontSize: "1em",
              marginRight: "0.4em",
              display: "inline-block",
              verticalAlign: "top",
              color: color,
            }}
          />
          <span id="text" style={{ color }}>
            {quote}
          </span>
        </div>
        <div id="author" style={{ color }}>
          - {author}
        </div>
        <div className="buttons">
          <a
          
            href="twitter.com/intent/tweet"
            className="button"
            id="tweet-quote"
            target="_blank"
            title="Tweet this quote!"
          >
            <FaTwitter
              style={{
                display: "inline-block",
                backgroundColor: color,
                float: "left",
                padding: "6px 0",
                fontSize: "inherit",
                textAlign: "center",
                width: "40px",
                height: "38px",
                border: "none",
                borderRadius: "3px",
                color: "white",
                outline: "none",
                marginTop: "30px",
                marginRight: "5px",
                opacity: "1",
                cursor: "pointer",
              }}
            />
          </a>

          <button
            className="button"
            id="new-quote"
            style={{ backgroundColor: color }}
            onClick={(e) => {
              e.stopPropagation();
              getQuotes();
              getColor();
            }}
          >
            New quote
          </button>
        </div>
      </div>
      <div className="footer">
        by
        <a href="/"> Oksana</a>
      </div>
    </>
  );
}

export default App;
