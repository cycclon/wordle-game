import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import { DarkModeToggle } from "./components/DarkModeToggle";

function App() {
  const [solution, setSolution ] = useState(null);

  useEffect(() => {
    //const API_URL = 'localhost:3001'
    const API_URL = 'https://wordleapi.glitch.me'
    fetch(`${API_URL}/solutions`)
    .then(res => res.json())
    .then(json => {
      // random int between 0 & 14
      const randomSolution = json[Math.floor(Math.random()*json.length)];

      setSolution(randomSolution.word);
    })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle Game</h1>
      <DarkModeToggle />
      {solution && <Wordle solution={ solution }/>}
    </div>    
  );
}

export default App;