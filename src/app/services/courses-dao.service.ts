import { Injectable } from '@angular/core';
import { Course } from '../classes/course';
import { COURSES } from '../../mock/courses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesDAOService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }
}
