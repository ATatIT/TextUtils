import About from "./Componets/About";
import Navbar from "./Componets/Navbar";
import Nopage from "./Componets/Nopage";
import Textarea from "./Componets/Textarea";
import { Routes, Route } from "react-router-dom";
import Services from "./Componets/Services";
import Textutils from "./Componets/Textutils";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Textutils />} />
        <Route path="/textutil" element={<Textutils />} />
        <Route path="/Textarea" element={<Textarea />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
