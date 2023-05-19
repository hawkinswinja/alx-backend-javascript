const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').toString('utf-8').trim();
    const studentdata = {};
    const students = data.split('\n').slice(1);
    for (const row of students) {
      const student = row.split(',');
      const field = student[3];
      if (!Object.keys(studentdata).includes(field)) {
        studentdata[field] = [];
      }
      studentdata[field].push(student[0]);
    }
    console.log(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(studentdata)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};
