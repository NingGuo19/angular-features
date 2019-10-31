import { Injectable } from '@angular/core';
import { Student } from './data/student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService
 {

  constructor() { }

  students: Student[] = [{
    id: 1,
    name: 'Krunal',
    EnrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
    id: 2,
    name: 'Rushabh',
    EnrollmentNumber: 110470116023,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
    id: 3,
    name: 'Ankit',
    EnrollmentNumber: 110470116022,
    College: 'VVP Engineering College',
    University: 'GTU'
}];

public getStudents(): any {
     const studentsObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.students);
            }, 10000);
     });

     return studentsObservable;
 }



}