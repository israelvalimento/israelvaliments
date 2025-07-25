import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home, About, Contact, Work } from "./pages/index.js";
import { Navbar } from "./components/components.js";
import { useState } from "react";
function App() {
  const [isFlip, setIsFlip] = useState(true);
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const homeHandler = () => {
    if (path === "/home") return;
    if (path === "/contact") {
      setIsFlip((prev) => !prev);

      navigate("/home");
    } else {
      navigate("/home");
    }
  };

  const contactHandler = () => {
    if (path === "/contact") return;

    if (path === "/home") {
      setIsFlip((prev) => !prev);
      navigate("/contact");
    } else {
      navigate("/contact");
    }
  };

  return (
    <main>
      <Navbar home={homeHandler} contact={contactHandler}></Navbar>

      {path === "/home" || path === "/contact" ? (
        <section className="flex h-screen w-screen items-center justify-center">
          <div
            className={`${isFlip ? "rotate-y-0" : "rotate-y-180"} perspective-distant h-57 relative w-[32rem] transition-all duration-1000 [transform-style:preserve-3d]`}
          >
            <Home />
            <Contact />
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
