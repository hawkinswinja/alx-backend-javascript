export default function createEmployeesObject(departmentName, employees) {
  const myDict = {};
  myDict[departmentName] = employees;
  return myDict;
}
