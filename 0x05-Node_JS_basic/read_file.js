const fs = require('fs');

const data = new Promise((resolve, reject) => {
  if (process.argv.length < 3) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
		} else {
      const students = data.trim().split('\n').slice(1);
      const fieldList = { CS: [], SWE: [] };
		  for (const row of students) {
        const data = row.split(',');
        if (data[3] === 'CS') {
          fieldList['CS'].push(data[0]);
        } else {
          fieldList['SWE'].push(data[0]);
        }
      }
			const summary = [`Number of students: ${students.length}`]
      for (const [k, v] of Object.entries(fieldList)) {
        summary.push(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
      }
      resolve(summary);
    }
  });
});
module.exports = data;
