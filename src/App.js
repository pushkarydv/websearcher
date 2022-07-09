import { BrowserRouter, Route, Routes } from "react-router-dom";
import Broadcast from "./components/Broadcast";
import Create from "./pages/Create";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Broadcast />
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
