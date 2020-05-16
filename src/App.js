import React from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.playGridDiv = React.createRef();
    this.state = {
      row: 0,
      col: 0,
      gridSize: 4
    };
    ArrowKeysReact.config({
      left: () => {
        if (this.state.col > 0) {
          this.setState({
            col: this.state.col - 1
          });
        }
      },
      right: () => {
        if (this.state.col < this.state.gridSize-1){
          this.setState({
            col: this.state.col + 1
          });
        }
      },
      up: () => {
        if (this.state.row > 0) {
          this.setState({
            row: this.state.row - 1
          });
        }
      },
      down: () => {
        if (this.state.row < this.state.gridSize-1){
          this.setState({
            row: this.state.row + 1
          });
        }
      }
    });
  }

  componentDidMount() {
    this.playGridDiv.current.focus();
  }

  render(){
    return (
      <div ref={this.playGridDiv} {...ArrowKeysReact.events} tabIndex="1" className="PlayGridDiv">
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
