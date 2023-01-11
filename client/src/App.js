import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Years from "./components/Years";
import Menu from "./components/Menu";
import Category from "./components/Category";
import Gallery from "./components/Gallery";
import TestFlip from "./components/TestFlip";
import { AnimatePresence } from "framer-motion";

function App() {

  // const users = [
  //   { id: "1", name: "kate"},
  //   { id: "2", name: "emily"},
  // ];

  return (
    <AnimatePresence initial={false}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test" element={<TestFlip />}></Route>
          <Route path="/:id" element={<Years />}></Route>
          <Route path="/:id/gallery" element={<Gallery />}></Route>
          <Route path="/:id/menu" element={<Menu />}></Route>
          <Route path="/:id/:id" element={<Category />}></Route>
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
