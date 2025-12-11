import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";

import Home from "./pages/Home";
import Levels from "./pages/Levels";
import LevelDetails from "./pages/LevelDetails";

export default function App() {
  return (
    <Background image="/backgrounds/background_new.jpg">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/levels/:id" element={<LevelDetails />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}



