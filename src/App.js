import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Years from "./components/Years";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/years" element={<Years />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
