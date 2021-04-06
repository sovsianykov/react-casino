import React, {useState} from 'react'
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    const [balance, setBalance ] = useState('')
  return (
    <div className="App">
      <Header balance = {balance} setBalance={setBalance}  />
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
