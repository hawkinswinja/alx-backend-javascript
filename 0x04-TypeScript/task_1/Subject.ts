import { Subjects } from "./Teacher";

export class Subject {
    teacher: Subjects.Teacher;
    
    set setTeacher(newTeacher: Subjects.Teacher) {
        this.teacher = newTeacher;
    }
}

Subjects.Subject = Subject;