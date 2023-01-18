import logo from './logo.svg';
import './App.css';
import PaymentMethodCard from './Components/PaymentMethodCard/PaymentMethod';
import SuccessPage from "./Components/SucessPage/Success"
function App() {
  return (
    <div className="App">
      <PaymentMethodCard />
      <SuccessPage />
    </div>
  );
}

export default App;
