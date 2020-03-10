import React from 'react';


const Card = (props) => {
 
    
    return(
        
        <div className="card-container">
           <img src={props.image} alt=""/>
           <div className="desc">
               <h2>{props.title}</h2>
               <h3>Author: {props.author}</h3>
           </div>    
        </div>
    )
}

export default Card;