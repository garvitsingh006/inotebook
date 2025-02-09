
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
      <>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </Router>
      </>
  );
}

export default App;