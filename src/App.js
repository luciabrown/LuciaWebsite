import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Papers } from "./components/Papers";   // ⬅ Add this
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Banner />
                <Projects />
              </>
            } 
          />
          <Route 
            path="/college-papers" 
            element={<Papers />} 
          />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
export default App;