  import React from "react";
  
 


   export  function Cards() {
    

   }
  function Card({image, title, onclick}) {

 

    return(
      
     
      <button className="card" onClick={onclick}>
      <img src={image}/>
       
      <div className="text">
        <h1>{title}</h1>
        </div>
        </button>
       

    )

  

  }



  export default Card;