import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/examples" element={<h1>Examples</h1>} />
          <Route path="/create" element={<h1>Create</h1>} />
          <Route path="/" element={<h1>Hello</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
