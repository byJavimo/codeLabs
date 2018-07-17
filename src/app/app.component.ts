import { Component} from '@angular/core';
import { CoursesDAOService} from './services/courses-dao.service';
import {Course} from '../app/classes/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'theCodeCrew_'; 
  opened: boolean;
  courses: Course[];

  toggle(): void {
    this.opened = !this.opened;
  }

  getCourses(): void {
    this.coursesDAOService.getCourses().subscribe(courses => {
      this.courses = courses;
    })
  }

  constructor(private coursesDAOService: CoursesDAOService) { }

  ngOnInit() {
    this.getCourses();
    this.opened = true;
  }
}