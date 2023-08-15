import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import Footer from "./components/Footer";
import "./styles/footer.scss"
import Contact from "./components/Contact";
import "./styles/contact.scss"
import Services from "./components/Services";
import "./styles/mediaQuery.scss"


function App() {

  return (
    <div>
      
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App