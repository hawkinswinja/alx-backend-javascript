const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
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
        console.log(`Number of students in CS: ${studentsCs.length}. List:`, studentsCs.join(', '));
        console.log(`Number of students in SWE: ${studentsSw.length}. List:`, studentsSw.join(', '));
        resolve(true);
      }
    });
  });
};
