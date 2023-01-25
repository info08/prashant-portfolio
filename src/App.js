import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index exact path="/" element={<TextForm heading="Text Area Container"/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
