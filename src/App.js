import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Create from "./pages/Create";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
