import "./reset.css";
import './App.css';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HornedBeast from "./components/HornedBeast/hornedbeast";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
        <HornedBeast />
    </div>
  );
}

export default App;
