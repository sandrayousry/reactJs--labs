import React, { Component } from 'react';
class Movies extends Component {
    state = { 
        data:[]
     }

     componentDidMount(){
         fetch("https://reqres.in/api/users?page=2",{
             headers:{
                 "token":localStorage
             }
     }).then(res => res.json())
         .then(res =>{
             this.setState({data:res.data})
         })
     }
    render() { 
        return (
           <div>
               {this.state.data.map((item)=>{
                   return <Movie key={item.id} item={item} />

               })
            }
           </div>
          )
    }
}

class Movie extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div style={{float:'left'}}>

                <img  src={this.props.item.avatar} />
                <span>{this.props.item.first_name}</span>
            </div>
        )
    }
}
export default Movies;