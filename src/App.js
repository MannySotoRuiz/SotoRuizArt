import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Years from "./components/Years";
import Menu from "./components/Menu";
import Drawings from "./components/Drawings";
import Crafts from "./components/Crafts";

function App() {

  // const users = [
  //   { id: "1", name: "kate"},
  //   { id: "2", name: "emily"},
  // ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Years />}></Route>
        <Route path="/:id/years" element={<Years />}></Route>
        <Route path="/:id/years/:id/menu" element={<Menu />}></Route>
        <Route path="/:id/years/:id/drawings" element={<Drawings />}></Route>
        <Route path="/:id/years/:id/crafts" element={<Crafts />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
