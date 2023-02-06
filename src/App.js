import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <div id="quote-text">
          <FaQuoteLeft style={{
            fontSize: "1em",
            marginRight: "0.4em",
            display: "inline-block",
            verticalAlign: "middle",
          }} />
          <span id="text"></span>
        </div>
        <div id="author">-</div>
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

          <button className="button" id="new-quote">
            New quote
          </button>
        </div>
      </div>
      <div className="footer">by 
        <a href="/"> Oksana</a>
      </div>
    </div>
  );
}

export default App;
