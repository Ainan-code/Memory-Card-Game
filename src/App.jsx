import { useState } from 'react';
import Card from './Components/Card';
import './App.css';

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";

function App() {

  const[clicked, setClicked] = useState([]);
  
function execute(param){

  setClicked([...clicked, param])
  console.log(clicked)
 
   
}

  return (
    <section>
     
  <div className="container">
    <div className="cardcontainer">
    <button onClick={() => execute("btn1")}> <Card title="Pens" image={image1}  /></button>
    <Card title="Pens" image={image2}/>
    <Card title="Pens" image={image3}/>
    <Card title="Pens" image={image4}/>
    </div>
    
   </div>
    </section>
   
  )
}

export default App
