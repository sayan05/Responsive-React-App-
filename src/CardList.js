import React from 'react';
import Card from './Card';
//import {robots} from './robots';
const CardList=({robots})=>{
	const CardComponent = robots.map((user, i)=>{
		return(<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} phone={robots[i].phone} username={robots[i].username} website={robots[i].website} address={robots[i].address}/>)
	})
	return(
		<div>
	
	{CardComponent}
	</div>
	);
}
export default CardList;