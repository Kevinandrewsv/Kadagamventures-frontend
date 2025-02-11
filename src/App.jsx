import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NithyaEvent from "./pages/NithyaEvent.jsx";
import NithyaTickets from "./pages/NithyaTickets";
import KadagamFoundation from "./pages/kadagamfoundation";

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
