import React,{Component} from 'react'
import {Button} from 'reactstrap'
import { thisExpression } from '@babel/types';
export default class Counters extends Component{

    state = {
        value: this.props.value,
        increment: 1,
        tags: ['tag1','tag2','tag3'],
        imageUrl:'http://picsum.photos/200'
    };
    counter(){
      if (this.state.value > 5) return 'to many thing'
    }
    renderTags(){
      if(this.state.tags.length===0) return <p>no tags left</p>;
      return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
   
    render() {
      
        return (
            <div>
              {this.props.children}
              <img src={this.state.imageUrl}/>
              <h1>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {this.counter()}
                </h1>
                <Button onClick={this.incrementCount}>+</Button>
                <Button onClick={this.decrementCount}>-</Button>
                <Button onClick={()=>this.props.onDelete(this.props.id)}>Delete</Button>
                {this.state.tags.length === 0 && 'please create a new tag'}
                {this.renderTags()}
            </div>
        );
    }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

    formatCount(){
      const {value: value} = this.state;
      return value === 0 ? "zero" : value;

    }
    decrementCount = ()=>{
      this.setState({value: this.state.value - 1})
    }
    incrementCount= ()=>{
      this.setState({value:this.state.value + 1})
    }
}
