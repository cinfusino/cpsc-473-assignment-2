import React, { Component } from 'react';

class Search extends Component {

  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterUpdate(val)
  }

  render() {
    //console.log('filterText value', this.props.filterText)
    return (
      <form>
        <input
        type="text"
        ref={ (value) => this.myValue = value}
        placeholder="Enter last name"
        onChange={this.filterUpdate.bind(this)}
        />
      </form>
    )
  }
}

export default Search;
