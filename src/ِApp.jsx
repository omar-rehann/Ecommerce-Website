import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./maincomponent/home"
import Shopnav from "./maincomponent/shop";
import Abouts from "./maincomponent/about"
import Blogg from "./maincomponent/blog";
import Contacts from "./maincomponent/contact"
import Products from "./maincomponent/product";
import Loginn from "./maincomponent/Login"
import Register from "./AllComponents/register"
import Navbar from "./AllComponents/navbar";
import Footer from "./AllComponents/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shopnav/>} />
        <Route path="/about" element={<Abouts/>} />
        <Route path="/blog" element={<Blogg/>} />
        <Route path="/contact" element={<Contacts/>} />
        
        <Route path="/login" element={<Loginn/>} />
        <Route path="/register" element={<Register/>} />
<Route path="/allitem" element={<Products/>} />




      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
