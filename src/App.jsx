import { useState } from 'react';
import Card from './Components/Card';
import './App.css';
import Score from './Components/Score';
const Shuffle = require('react-shuffle');


import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";

function App() {

  const Cards = [
    {
      index: 0,
      Imgsrc: image1,
      title: "Card1",
    },
    {
      index: 1,
      Imgsrc: image2,
      title: "Card2",
    },
    {
      index: 2,
      Imgsrc: image3,
      title: "Card2",
    },
    {
      index: 3,
      Imgsrc: image4,
      title: "Card4",
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
     
     <div> <Score score={score} /> </div>
    <div className="cardcontainer">

      <Shuffle>
      {Cards.map((item) => {
        return     <Card key={item.index} title={item.title} image={item.Imgsrc} onclick={() => execute(item.index)} />  
        

      } )}
      </Shuffle>
      
     
      
    </div>

   
    
   
    </section>
   
  )
}

export default App
