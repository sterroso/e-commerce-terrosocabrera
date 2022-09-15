import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <CartWidget></CartWidget>
    </div>
  );
}

export default App;
