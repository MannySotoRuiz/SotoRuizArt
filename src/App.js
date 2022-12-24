import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Years from "./components/Years";
import Menu from "./components/Menu";
import Category from "./components/Category";
// import Drawings from "./components/Drawings";
// import Paintings from "./components/Paintings";
// import Crafts from "./components/Crafts";
// import Sculptures from "./components/Sculptures";

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
        <Route path="/:id/years/:id/:id" element={<Category />}></Route>
        {/* <Route path="/:id/years/:id/drawings" element={<Drawings />}></Route>
        <Route path="/:id/years/:id/paintings" element={<Paintings />}></Route>
        <Route path="/:id/years/:id/crafts" element={<Crafts />}></Route>
        <Route path="/:id/years/:id/sculptures" element={<Sculptures />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
