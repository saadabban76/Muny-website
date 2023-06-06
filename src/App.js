import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowtoBuy from "./components/HowtoBuy";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-primarybg text-primarytxt">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <HowtoBuy />
                <Footer />
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
