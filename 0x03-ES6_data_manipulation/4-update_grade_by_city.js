export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter(student => student.location === city).map(student => newGrades.studentId[student.id] ? student['grade'] = newGrades.studentId[student.id]
