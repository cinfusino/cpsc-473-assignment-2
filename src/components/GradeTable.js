import React from 'react'

export default ({data, favorites}) => {
  const namesList = favorites.map(id => {
    return (
      <tr>
        <td></td>
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
