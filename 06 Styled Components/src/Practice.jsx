import React from 'react'

function Practice() {
    const student = []
  return (
    <div>
      {student.length && "student not found"}
      <p>Number of student {student.length}</p>
    </div>
  )
}

export default Practice
