import React from 'react';
import './App.css';
import ListItems from './ListItems'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentitem:{
        text:'',
        key:''
      }

    }
    this.handelinput = this.handelinput.bind(this);
    this.additem = this.additem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  


  }
  handelinput(e){
    this.setState({
      currentitem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  // to prevent page refresh after clicking on add button
  additem(e){
    e.preventDefault();
    const newitem = this.state.currentitem;
    // console.log(newitem);
    // add item
    // check if newitem not empty
    if(newitem.text!==""){
      // destructuring assignment format
       const newitems = [...this.state.items, newitem];
       this.setState({
         items:newitems,
         currentitem:{
           text:'',
           key:''
         }
       })
      }
    }
    deleteItem(key){
      const filteredItems= this.state.items.filter(item =>
        item.key!==key);
      this.setState({
        items: filteredItems
      })
  
    }

    setUpdate(text,key){
      
      const items = this.state.items;
      items.map(item=>{      
        if(item.key===key){
          item.text= text;
        }
      })
      this.setState({
        items: items
      })
    }




  
  render(){
  return (
    <div className="app">
    <form id="todoform" onSubmit={this.additem}>
      <input type="text" placeholder="Enter text" value={this.state.currentitem.text} 
      onChange={this.handelinput}/>
      <button type="submit">Add</button>  
    </form>
           


      <ListItems items = {this.state.items} deleteItem ={this.deleteItem} setUpdate={this.setUpdate} ></ListItems>    
   
    </div>
 
  );
}
}
export default App;
