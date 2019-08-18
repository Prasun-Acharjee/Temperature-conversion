import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={cel:0,fah:32}
  }
  changetof=(event)=>
  {
    this.setState({cel:event.target.value,fah:9/5*(event.target.value)+32});
  }
  changetoc=(event)=>
  {
    this.setState({cel:((event.target.value)-32)*5/9,fah:event.target.value});
  }
  render(){
    return(
      <div>
        <h1>Celcius</h1>
        <input type="number" value={this.state.cel} onChange={this.changetof}/>
        <h1>Fahrenheit</h1>
        <input type="number" value={this.state.fah} onChange={this.changetoc}/>
      </div>
    );
  }
}
export default App;
