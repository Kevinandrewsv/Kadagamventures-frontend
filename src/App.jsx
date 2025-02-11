import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css"; 
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import NithyaEvent from "./pages/NithyaEvent.jsx";
import NithyaTickets from "./pages/NithyaTickets.jsx";
import KadagamFoundation from "./pages/KadagamFoundation.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/NithyaEvent" element={<NithyaEvent />} />
        <Route path="/NithyaTickets" element={<NithyaTickets />} />
        <Route path="/KadagamFoundation" element={<KadagamFoundation />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
