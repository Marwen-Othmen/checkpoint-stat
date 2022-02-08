import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { eleves } from './Data';
import Profil from './Profil';
import { Info } from './Info';
import Counter from './Counter';
import Countertwo from './Countertwo';


export default class App extends Component {
  constructor (props){
    super(props)
    this.state={show:true}
  }
  render() {
    console.log(this.state.show)
    return <div>
      <Header/>
      <button onClick={()=>this.setState({show:!this.state.show})}> Show | hider </button>
     {this.state.show && 
     <div> 
      <Counter/>
      <Profil Data={eleves}  />  </div> }
     
    </div>;
  }
}
