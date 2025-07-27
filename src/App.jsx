import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home, About, Contact, Work } from "./pages/index.js";
import { Navbar, Modal } from "./components/components.js";
import { useState } from "react";
function App() {
  const [isFlip, setIsFlip] = useState(true);
  const [isClose, setIsClose] = useState(true);
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const homeHandler = () => {
    setIsFlip(true);
    navigate("/home");
  };

  const contactHandler = () => {
    setIsFlip(false);
    navigate("/contact");
  };

  const modalHandler = () => {
    setIsClose((prev) => !prev);
  };

  return (
    <main>
      <Modal
        modal={isClose ? "hidden" : "block"}
        closeModal={modalHandler}
      ></Modal>
      <Navbar home={homeHandler} contact={contactHandler}></Navbar>
      {path === "/home" || path === "/contact" ? (
        <section className="flex h-screen w-screen items-center justify-center">
          <div
            className={`${isFlip ? "rotate-y-0" : "rotate-y-180"} perspective-distant h-57 relative w-[32rem] transition-all duration-1000 [transform-style:preserve-3d]`}
          >
            <Home />
            <Contact closeModal={modalHandler} />
          </div>
        </section>
      ) : (
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
