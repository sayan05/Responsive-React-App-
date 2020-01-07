import React, {Component} from 'react';
import CardList from './CardList';
//import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import 'tachyons';
import './App.css';
import Error from './Error';
class App extends Component{
	constructor() {
	super()
	this.state={
	robots: [],
	searchfield: ''
}
}
componentDidMount(){

	let array1=[]
	fetch('https://my-json-server.typicode.com/murtaza1112/card/posts')
	 .then(response=>response.json())
	 .then(users=> {
	 	array1=array1.concat(users);
	 	this.setState({robots:array1})
	 })
	fetch('https://my-json-server.typicode.com/murtaza1112/card1/posts').then(response=>response.json()).then(users=> {
	 	array1=array1.concat(users);
	 	this.setState({robots:array1})
	 })
	fetch('https://my-json-server.typicode.com/murtaza1112/cards/posts').then(response=>response.json()).then(users=> {
	 	array1=array1.concat(users);
	 	this.setState({robots:array1})
	 })

	 
	/* async function getUserAsync(name) 
    {
    	
  let response = await fetch(`https://my-json-server.typicode.com/murtaza1112/card/posts`);
  let data = await response.json()
  let array=data

   response = await fetch(`https://my-json-server.typicode.com/murtaza1112/card1/posts`);
   data = await response.json()
  array=array.concat(data)

  response = await fetch(`https://my-json-server.typicode.com/murtaza1112/cards/posts`);
   data = await response.json()
   array=array.concat(data)

  return array;
    }

   getUserAsync().then(data => this.setState({robots:data})); */

}


onSeachChange=(event)=>{
	this.setState({searchfield:event.target.value})
}

render()
{
	const filteredRobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
	console.log(this.searchfield)
    if(this.state.robots.length === 0){
		return(<h1>Loading</h1>)
	}
	else{
  return (
    <div className="tc">
    <h1>RoboFriends</h1>    
    <SearchBox searchChange={this.onSeachChange}/>
    <Scroll id="Scroll">
       <Error>
       		<CardList robots={filteredRobots}/>
       </Error>
    </Scroll>
    </div>
  );
}
}
}

export default App;
