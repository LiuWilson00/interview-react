import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  const initData = async () => {
    const success = await axios(endpoint);
    if (success) {
      console.log(success);
    }
  };
  useEffect(() => {
    initData();
  }, []);
  return (
    <div className="App">
      <form class="search-form">
        <input type="text" class="search" placeholder="City or State"></input>
        <ul class="suggestions">
          <li>Filter for a city</li>
          <li>or a state</li>
        </ul>
      </form>
    </div>
  );
}

export default App;
