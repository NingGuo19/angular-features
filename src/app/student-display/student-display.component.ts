import { Component, OnInit } from '@angular/core';
import { Student } from '../data/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {

  students: Student[] = [];

    constructor(private studentservice: StudentService) {}

    ngOnInit() {
        const studentsObservable = this.studentservice.getStudents();
        studentsObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData;
        });
    }

}