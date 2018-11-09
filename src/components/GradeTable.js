import React from 'react'

export default ({data, selectedStudent}) => {
      let courseList = <tr key="0"></tr>
      const index = parseInt(selectedStudent)
      let student = {firstName:"", lastName:""}
      if (index <= data.length) {
      student = data[index];
      courseList = student.courses.map(course =>{
        return(
          <tr key={course.id}>
            <td>{course.subject}</td>
            <td>{course.grade}</td>
          </tr>
        )
      })
    }

    return(
      <div>
        <p className="title"><strong> Grades for {student.firstName} {student.lastName}:</strong></p>
        <table>
          <tbody>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
            {courseList}
          </tbody>
        </table>
      </div>
    )
  }
