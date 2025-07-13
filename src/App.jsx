import { Routes, Route } from "react-router-dom";

import { Home, About } from "./pages/index.js";
import { Navbar } from "./components/components.js";

function App() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
