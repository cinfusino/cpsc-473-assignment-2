import React, { Component } from 'react';
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
      });
    }
  render() {
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
      </div>
    )
  }

}
export default App;
