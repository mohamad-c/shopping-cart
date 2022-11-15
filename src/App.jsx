import "./App.css";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <ProductPage /> } />
          <Route path="/checkout" element={ <CheckoutPage /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
