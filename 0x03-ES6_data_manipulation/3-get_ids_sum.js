export default function getStudentIdsSum(students) {
  return students.reduce((total, student) => {
    let sum = total;
    sum += student.id;
    return sum;
  }, 0);
}
