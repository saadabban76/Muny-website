import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-primary text-black">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <h5>hi</h5>
              </>
            }
          />
          <Route path="/working" element={<h2>working</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
