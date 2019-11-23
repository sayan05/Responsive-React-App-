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
	fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}))
}
onSeachChange=(event)=>{
	this.setState({searchfield:event.target.value})
}

render()
{
	const filteredRobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
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
