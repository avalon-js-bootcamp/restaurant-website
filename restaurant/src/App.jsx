import "./App.css";
import Home from "./assets/home";
import Menu from "./assets/menu";
import Contact from "./assets/contact";
import { useState } from "react";
function App() {
  const [page, setPage] = useState("home");
  const pageChange = (page) => {
    setPage(page.target.className);
  };
  return (
    <div className="App">
      <div className="Nav">
        <div className="home" onClick={pageChange}>
          Home
        </div>
        <div className="menu" onClick={pageChange}>
          Menu
        </div>
        <div className="contact" onClick={pageChange}>
          Contact
        </div>
      </div>
      {page === "home" && <Home />}
      {page === "menu" && <Menu />}
      {page === "contact" && <Contact />}
      <div className="footer">Angie©2023</div>
    </div>
  );
}

export default App;
