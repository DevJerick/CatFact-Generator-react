import "./App.css";
import { useEffect, useState } from "react";
import Cat from "../src/components/img/undraw_cat_re_d1sv.svg";
import Cat2 from "../src/components/img/undraw_playful_cat_re_ac9g.svg";

function App() {
  const [catFact, setFactCat] = useState("");
  const [catFactLength, setFactCatLength] = useState("");

  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setFactCat(data.fact);
        setFactCatLength(data.length);
      });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className='App'>
      <header>
        <img src={Cat2} />
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
      </header>
      <div className='textContainer'>
        <p>{catFact}</p>
      </div>
      <div className='length'>
        <img src={Cat} />
        <p>
          Length: <small>{catFactLength}</small>
        </p>
      </div>
    </div>
  );
}

export default App;
