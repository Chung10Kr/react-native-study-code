import React from 'react';
import PropTypes from "prop-types";


class App extends React.Component{
  constructor(props ){
    super(props)
    console.log("Constructor");
  }
  state ={
    isLoading : true
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false})
    }, 3000);
  }
  render(){
    console.log("render")
    const {isLoading} = this.state;
    return (
      
      <div>{isLoading ? "Loading..." : "ready"} </div>
    )
  }
}

export default App;
