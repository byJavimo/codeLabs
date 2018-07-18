import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {COURSES} from '../mock/courses';
import {POSTS} from '../mock/posts'; 

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const data = [
      COURSES,
      POSTS
    ]
    return {data};
  }

  constructor() { }
}
