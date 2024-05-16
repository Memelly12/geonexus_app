import "./App.css";
import { Acceuil } from "./pages/acceuil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VisData } from "./pages/visData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/visData" element={<VisData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
