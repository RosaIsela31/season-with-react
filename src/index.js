import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
  state = { lat: null, errorMessage: '' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      err => ({ errorMessage: err.message})
    );
    
  }
  
  renderContent () {
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <div>Please accept location request</div>
  }

 
  render(){
   
    return(
      <div className='border red'>{this.renderContent()}</div>
    )
  }
}
 

ReactDOM.render(<App />, document.getElementById('root'));