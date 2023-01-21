import Navbar from "./Admin_Side/Components/Navbar/Navbar";
import Footer from "./Admin_Side/Components/Navbar/Footer";
import './App.css';
import AllRoutes from "./Admin_Side/Pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
