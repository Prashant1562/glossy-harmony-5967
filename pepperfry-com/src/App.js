import Navbar from './AdminSide/Components/Navbar/Navbar';
import Footer from './AdminSide/Components/Navbar/Footer';
import './App.css';
import AllRoutes from './AdminSide/Pages/AllRoutes';
import ProductPage from './AdminSide/Pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductPage />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
