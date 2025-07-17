import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home, About, Contact, Work } from "./pages/index.js";
import { Navbar } from "./components/components.js";
import { useState } from "react";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRotate, setRotate] = useState("");
  const clickHandler = () => {
    if (location.pathname === "/contact") {
      setRotate("rotate-y-180");
      setTimeout(() => {
        navigate("/contact");
      }, 1000);
    }
  };
  return (
    <main>
      <Navbar contact={clickHandler} home={clickHandler}></Navbar>
      <Routes>
        <Route path="/Home" element={<Home isRotate={isRotate} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </main>
  );
}

export default App;
