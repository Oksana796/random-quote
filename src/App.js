import React, { useState } from "react";

import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

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

  return (
    <div className="App">
      <div id="quote-box">
        <div id="quote-text">
          <FaQuoteLeft
            style={{
              fontSize: "1em",
              marginRight: "0.4em",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          />
          <span id="text">{quote}</span>
        </div>
        <div id="author">- {author}</div>
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
                backgroundColor: "black",
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

          <button className="button" id="new-quote" onClick={() => getQuotes()}>
            New quote
          </button>
        </div>
      </div>
      <div className="footer">
        by
        <a href="/"> Oksana</a>
      </div>
    </div>
  );
}

export default App;
