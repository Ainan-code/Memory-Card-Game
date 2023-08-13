  import React from "react";
 


  function Card({image, title}) {

 

    return(
      
     
      <div className="card">
      <img src={image}/>
       
      <div className="text">
        <h1>{title}</h1>
        </div>
        </div>
       

    )

  

  }



  export default Card;