import "./App.css";
import CrushTribute from "./components/CrushTribute";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <CrushTribute />
      <Analytics />
    </>
  );
}

export default App;
