import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [zgloszenia, setZgloszenia] = useState([]);
  
  useEffect(() => {
    axios.get("/zgloszenia.json").then((res) => {setZgloszenia(res.data.zgloszenia)});
  },
  []
)

  return (
  <>
  
  </>
);
}

export default App;
