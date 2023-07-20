import "./reset.css";
import './App.css';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HornedBeast from "./components/SelectedBeast/SelectedBeast.js";
import { useState } from "react";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast.js";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function handleModal(beast){
    setShowModal(!showModal)
    setModalContent(beast)
  }
function closeModal(beast){
  setShowModal(!showModal)
  setModalContent(beast)
}
  return (
    <div className="App">
        <Header />
        <Main openModal={handleModal} modalContent={modalContent}/>
        <Footer />
        {showModal && <SelectedBeast modalContent={modalContent} closeModal={closeModal} />}
    </div>
  );
}

export default App;
