import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Button from "./components/button";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
