import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';


class App extends Component {
    constructor(){
        super()
        this.state ={
            robots:robots,
            searchfield: ''
        }

    }
    onSearch =(event)=>{
        this.setState({searchfield:event.target.value})
        

    }
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>RoboFriend</h1>
                <SearchBox searchChange={this.onSearch}/>
                <CardList robots={filteredRobots} />
            </div>
            
        );

    }
    
}

export default App;