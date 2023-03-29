interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [options: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number,
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
 }
 
function printTeacher(firstName: string, lastName: string) {
   return (`${firstName.slice(0,1)}. ${lastName}`);
 }

interface Construct { 
  firstName: string,
  lastName: string,
}
class StudentClass implements Construct {
  firstName: string;
  lastName: string;
  constructor(firstname: string, lastname: string) {
    this.firstName = firstname;
    this.lastName = lastname;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}