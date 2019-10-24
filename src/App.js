import React, {Component} from 'react';
import {Button} from 'reactstrap';
import Counter from './Components/Counter/Counter'
import './App.css'


export default class App extends Component{
    state={
      counters:[
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
      ]
    };
    deleteCount = counterId =>{
      const counters =  this.state.counters.filter(c=> c.id !== counterId);
      this.setState(counters)
      console.log('event delete handler', counterId)
    };

    render() {
      
        return (
            <div>
              
              {this.state.counters.map(counter =>(
              <Counter key={counter.id} id={counter.id} onDelete={this.deleteCount} value={counter.value}>
              <h4>{counter.id}</h4>  
              </Counter>))}
            </div>
        );
    }
}