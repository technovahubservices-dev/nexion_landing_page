import { useState } from "react";
import "./App.css";

import { Navbar } from "./Navbar.jsx";
import { Features } from "./Features.jsx";
import { UseCases } from "./UseCases.jsx";
import { Pricing } from "./Pricing.jsx";
import { ScrollToTop } from "./ScrollToTop.jsx";
import { FloatingCTA } from "./FloatingCTA.jsx";
import { Contact } from "./Contact.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Features />
      </div>
      <UseCases />
      <Pricing />
      <ScrollToTop />
      <FloatingCTA />
      <Contact />
      <footer className="footer">
        © 2026 <span>TechnovaHub</span>. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;
