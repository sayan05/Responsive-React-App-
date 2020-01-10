import React from 'react';
import './Card.css';

const Card=(props)=>{
	


	return(
       /*<div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
         <img alt="robots" src={`https://robohash.org/${props.id}`} />
         <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
         </div>
       </div>*/

<span className="tc dib br3 ma2 grow bw2 shadow-5">
     <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front" >
      <div className="photo">
      <img src={`https://robohash.org/${props.id}`} alt="Avatar"  width="150" height="150" background="white"/>
      </div>
      <h3>{props.name}</h3>
      <p>@{props.username}</p>
     <p>Email:{props.email}</p>
    </div>
     
    <div className="flip-card-back">
      
      <div className="address">
        <div className="ahead">
        <h1><u>Address</u>:</h1>
        </div>
        <div className="abody">
        <p>{props.address.street},</p>
        <p>{props.address.suite},</p>
        <p>{props.address.city}</p>
        <p>Zipcode:{props.address.zipcode}</p>
        </div>
      </div>
      <div className="website">
      <a href={`www.${props.website}`} className="button button1"><span>View My Website</span></a>
      </div>
     </div>
   </div>
   </div>
</span>
     
	)
}

export default Card;