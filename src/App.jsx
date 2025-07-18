import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home, About, Contact, Work } from "./pages/index.js";
import { Navbar } from "./components/components.js";
import { useState } from "react";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [homeCard, setHomecard] = useState("");
  const [contactCard, setContactcard] = useState("");
  // const clickHandler = () => {
  //   if (location.pathname === "/contact") {
  //     setRotate("rotate-y-180");
  //     setTimeout(() => {
  //       navigate("/contact");
  //     }, 1000);
  //   }
  // };
  const contact_clickHandler = () => {
    setHomecard("rotate-y-180");

    location.pathname === "/about" || location.pathname === "/work"
      ? (navigate("/contact"), setContactcard("rotate-y-0"))
      : setTimeout(() => {
          navigate("/contact");
          setContactcard("rotate-y-0");
        }, 610);
  };
  const home_clickHandler = () => {
    setContactcard("-rotate-y-180");

    location.pathname === "/about" || location.pathname === "/work"
      ? (navigate("/home"), setHomecard("rotate-y-0"))
      : setTimeout(() => {
          navigate("/home");
          setHomecard("-rotate-y-0");
        }, 610);
  };
  return (
    <main>
      <Navbar contact={contact_clickHandler} home={home_clickHandler}></Navbar>
      <Routes>
        <Route path="/Home" element={<Home isRotate={homeCard} />} />
        <Route path="/Contact" element={<Contact isRotate={contactCard} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </main>
  );
}

export default App;
