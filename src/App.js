import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Search from './components/Search';
import StudentsFound from './components/StudentsFound';
import GradeTable from './components/GradeTable'
import './App.css';
class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
        filterText: '',
        favorites: [1,2,3]
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> parent of f9aca12... first commit

class App extends Component {
  render() {
<<<<<<< HEAD
    //console.log('filterText state from parent component', this.state.filterText)
    return(
      <div className="outter-box">
        <div className="top-box">
          <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          />
        </div>

        <div className="bottom-box">

          <div className="bottom-left-box">
            <StudentsFound
            data={this.props.data}
            filterText={this.state.filterText}
            />
          </div>

          <div className="bottom-right-box">
              <GradeTable
                data={this.props.data}
                favorites={this.state.favorites}
              />
          </div>


        </div>
=======
=======
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
>>>>>>> parent of f9aca12... first commit
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
<<<<<<< HEAD
>>>>>>> parent of f9aca12... first commit
=======
>>>>>>> parent of f9aca12... first commit
      </div>
    );
  }
}

export default App;
