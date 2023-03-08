import { useState } from "react";
import "./App.css";
import Home from "./home";
import Product from "./products";
import Contact from "./contact";

function App() {
  const [page, setPage] = useState("Home");

  const handleClick = (page) => {
    setPage(page.target.className);
  };

  return (
    <div className="App">
      <div className="tabs">
        <div className="Home" onClick={handleClick}>
          Home
        </div>
        <div className="Product" onClick={handleClick}>
          Products
        </div>
        <div className="Contact" onClick={handleClick}>
          Contact
        </div>
      </div>
      {page === "Home" && <Home />}
      {page === "Product" && <Product />}
      {page === "Contact" && <Contact />}
    </div>
  );
}

export default App;
