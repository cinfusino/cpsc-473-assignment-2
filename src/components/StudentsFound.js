import React from 'react';

export default ({ data, filterText }) => {
    const studentList = data.map(student => {
      if (filterText.toLowerCase() === student.lastName.toLowerCase()) {
      return (
        <li key={student.id} className="students-found-li">{student.firstName} {student.lastName}</li>
      )
    }
      return (
        <li></li>
      )
    })

    //<p>filterText value is: {this.props.filterText} </p> PLACE THIS AFTER FIRST <div> IN RETURN() TO SEE
    return (
      <div>
        <p><strong> Students Found: </strong></p>
        <ul>
          {studentList}
        </ul>
      </div>
    );
}
