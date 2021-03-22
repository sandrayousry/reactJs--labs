// import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component{
constructor(){
  super();
  this.state ={
    title:"Welcome",
    count:0
  }
  this.changeCounter=this.changeCounter.bind(this);
}
changeCounter(){
// this.state.title ="sandra"
// this.setState({title:"sandra"});
let newCount = this.state.count+1;
this.setState({count:newCount});
}
render(){
  return (
    <div style={{marginLeft:"500px"}}>
      <div>
        <h3 style={{color:"red"}} >click on the button to increase the counter</h3>
        <h1>{this.state.count}</h1>
      </div>
      <button onClick={this.changeCounter}>changeCounter</button>
    </div>
  );
}
}

export default App;








