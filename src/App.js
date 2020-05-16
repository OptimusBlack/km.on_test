import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      row: 0,
      col: 0,
      gridSize: 4
    };
  }

  render(){
    return (
      <div className="PlayGridDiv">
        <PlayGrid row={this.state.row} col={this.state.col}/>
      </div>
    );
  }
}

class Dot extends React.Component {
  render(){
    return(
      <svg height="30" width="30">
        <circle cx="15" cy="15" r="10" fill="red"/>
      </svg>
    );
  }
}

class PlayGrid extends React.Component {
  createGrid = () => {
    let rows = [];
    
    for (var i = 0; i < 4; i++){
      let rowID = `row${i}`;
      let cell = [];
      
      for (var j = 0; j < 4; j++){
        let cellID = `cell${i}-${j}`;
        cell.push(<td key={cellID} id={cellID}>{this.props.row === i && this.props.col === j && <Dot/>}</td>);
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>);
    }
    
    return rows;
  }
  
  render(){
    return (
      <table>
        <tbody>
          {this.createGrid()}
        </tbody>
      </table>
    );
  }
}

export default App;
