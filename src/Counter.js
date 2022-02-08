import React, { Component } from "react";


export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 5, time: 0 };
  }
  componentDidMount(){
setInterval(() => {
    this.setState({time:this.state.time+1})
    
}, 1000);
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");

}
componentWillUnmount(){
    console.log("componentWillUnmount");
}

  render() {
    const PlusButtom = (x) => {
      console.log('hello')
      return this.setState({ count: this.state.count + x });
    };
    const MinusButton = () => {
      return this.state.count > 0 && this.setState({ count: this.state.count - 1 });
    };
    return (
      <div>
        <button onClick={MinusButton}> - </button>
        <p> {this.state.count} </p>
        <button onClick={() => this.setState({count:this.state.count+1})}> + </button>
        <p> {this.state.time}</p>
      </div>
    );
  }
}
