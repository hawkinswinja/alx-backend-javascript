const fs = require('fs');

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const fieldList = { CS: [], SWE: [] };
        const students = data.trim().split('\n').slice(1);
        for (const row of students) {
          const student = row.split(',');
          if (student.includes('CS')) {
            fieldList['CS'].push(student[0]);
          } else {
            fieldList['SWE'].push(student[0]);
          }
        }
        resolve(fieldList);
      }
    });
  });
};
