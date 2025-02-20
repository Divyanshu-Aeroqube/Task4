import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Villas from './Pages/Villas'
import DetailedVillas from "./Pages/DetailedVila"
import AboutUs from "./Pages/AboutUs";


const App = () => {
  return (
    <div  >
      <Navbar />
      <Routes>
        <Route path="/" element={<Villas />} />
        <Route path="/villa/:id" element={<DetailedVillas />} />
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
