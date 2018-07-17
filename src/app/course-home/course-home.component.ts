import { Component, OnInit, Input } from '@angular/core';
import {Course} from '../classes/course';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css']
})
export class CourseHomeComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit() {}

}
