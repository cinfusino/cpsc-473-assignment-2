import React from 'react'

export default ({data, favorites}) => {
  const namesList = favorites.map(id => {
    const courseList = data[id].courses.map(courseIndex => {

    })
    return (
      <tr>
        <td>courses[]</td>
        <td></td>
      </tr>
    )
  })
  return(
    <div>
      <p><strong> Grades for Student:</strong></p>
      <table>
        <tr>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </table>
    </div>
  )
}
