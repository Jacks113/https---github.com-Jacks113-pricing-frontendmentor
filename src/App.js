import { useState } from 'react';
import './App.css';
import Pricing from './Components/Pricing';
import Toggle from './Components/Toggle';

function App() {

  // variables, states for the prices 
  const monthlyPrices = ["19.99", "24.99", "39.99"];
  const annualPrices = ["199.99", "249.99", "399.99"];

  const [price, setPrice] = useState(monthlyPrices);

  const [annualy, setAnnualy] = useState(false);


  // function for change of price thats passed off

  const changePrice = () => {
    let left = document.getElementsByClassName("textLeft");
    let right = document.getElementsByClassName("textRight");

    if (annualy === false){
      setPrice(annualPrices);
      setAnnualy(true);   
     
      left[0].classList.remove("active-text");
      left[0].classList.add("inactive-text");
      right[0].classList.add("active-text");
      right[0].classList.remove("inactive-text");
    }

    else{
      setPrice(monthlyPrices);
      setAnnualy(false);

      left[0].classList.add("active-text");
      left[0].classList.remove("inactive-text");
      right[0].classList.remove("active-text");
      right[0].classList.add("inactive-text");
    }
  }
  
  
  return (
    <div className="App">
       <h1>Our Pricing</h1>
        <Toggle change = {changePrice}/>
        <Pricing  price={price}/>        
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/Jacks113">AH</a>.
          </div>
    </div>

    
  );
}

export default App;
