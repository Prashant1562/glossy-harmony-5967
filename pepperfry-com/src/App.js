import Navbar from "./Admin_Side/Components/Navbar/Navbar";
import Footer from "./Admin_Side/Components/Navbar/Footer";
import './App.css';
import AllRoutes from "./Admin_Side/Pages/AllRoutes";
import ProductPage from "./Admin_Side/Pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductPage />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
