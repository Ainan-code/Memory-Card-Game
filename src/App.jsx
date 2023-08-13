import { useState } from 'react';
import Card from './Components/Card';
import './App.css';

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";

function App() {

  const cards = [
    {
      id: 0,
      name: "card1",

    },
    {
      id: 2,
      name: "card2",
      
    }
  ]
  const[clicked, setClicked] = useState([]);
  const[score, setScore] = useState(0);
function execute(param){
   if (clicked.includes(param)){
     alert("card is already clicked")
   } else {
    setClicked([...clicked, param]);
    setScore(score + 1)
   }
  
  console.log(clicked)
 
   
}

  return (
    <section>
     
    <div> {score}</div>
    <div className="cardcontainer">
      {cards.map((item) => {
        return     <button  key={item.id} className='unstyled' onClick={() => execute(item.name)}> <Card title="Pens" image={image1}/></button>

      } )}
  
    </div>
    
   
    </section>
   
  )
}

export default App
