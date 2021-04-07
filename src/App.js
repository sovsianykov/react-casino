import React, {useState} from 'react'
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {Button} from "@material-ui/core";
import PlayingModal from "./components/PlayingModal/PlaingModal";

function App() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const [balance, setBalance ] = useState(0);
    const [spinRow , setSpinRow] = useState([{  slot1: 0, slot2: 0, slot3: 0, time : time }]);
    const [currentSpin, setCurrentSpin ] = useState({  slot1: 0, slot2: 0, slot3: 0, time : time })
    const [open, setOpen] = React.useState(false);


      const handleOpen = () => {
        setOpen(true);
    };

    const getSpin = () =>{
        let spin1 = Math.floor(Math.random() * 9) +1;
        let spin2 = Math.floor(Math.random() * 9) +1;
        let spin3 = Math.floor(Math.random() * 9) +1;

        let spinArr = [{slot1: spin1, slot2: spin2, slot3: spin3, time : time  }]
        setCurrentSpin(spinArr[0])
        setBalance(balance -1)
        setSpinRow(spinRow.concat(spinArr))
        if (spin1 === spin2 && spin2 === spin3 ) { setBalance(balance + 5)  }
        else if ( spin1 === spin2 || spin2 === spin3 || spin1 === spin3 ) {setBalance(balance + 0.5)}
    }

  return (
    <div className="App">
      <Header balance = {balance} setBalance={setBalance}  />
        <Button variant='contained' color='secondary' onClick={handleOpen} >
            START TO PLAY
        </Button>
        <PlayingModal open = {open} setOpen = {setOpen} currentSpin = {currentSpin} getSpin = {getSpin} />
      <Content spinRow = { spinRow }/>
      <Footer/>
    </div>
  );
}

export default App;
