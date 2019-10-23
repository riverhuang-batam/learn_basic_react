import React, {Component} from 'react';
import {Button} from 'reactstrap'
import './App.css';

export default class App extends Component {
    state = {
        count: 0,
        increment: 1,
        imageUrl:'http://picsum.photos/200'
    };
    render() {
      
        return (
            <div className="App">
              <img src={this.state.imageUrl}/>
              <h1>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                </h1>
                <Button onClick={this.incrementCount()}>+</Button>
            </div>
        );
    }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

    formatCount(){
      const {count} = this.state;
      return count === 0 ? "zero" : count;

    }
    incrementCount(){
      
      const {increment} = this.state.increment;
      return this.state.count += increment
    }
}
