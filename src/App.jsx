import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Work } from "./pages/index.js";
import { Navbar } from "./components/components.js";

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </main>
  );
}

export default App;
