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
          selectedStudent:''
      }
    }

    filterUpdate(value) {
      this.setState({
        filterText: value
      });
    }

    selectStudent(id) {
      console.log(id)
      this.setState({
        selectedStudent: id
      })
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
            selectStudent={this.selectStudent.bind(this)}
            />
          </div>


          <div className="bottom-right-box">
            <GradeTable
              data={this.props.data}
              selectedStudent={this.state.selectedStudent}
            />
          </div>


        </div>
      </div>
    )
  }

}
export default App;
