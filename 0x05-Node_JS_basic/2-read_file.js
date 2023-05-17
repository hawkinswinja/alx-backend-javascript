const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    const studentsCs = [];
    const studentsSw = [];
    const students = data.split('\n').slice(1, -1);
    for (const row of students) {
      if (row.includes('CS', -3)) {
        studentsCs.push(...row.split(',').slice(0, 1));
      } else if (row.includes('SWE', -3)) {
        studentsSw.push(...row.split(',').slice(0, 1));
      }
    }
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${studentsCs.length}. List:`, ...studentsCs);
    console.log(`Number of students in SWE: ${studentsSw.length}. List:`, ...studentsSw);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};
