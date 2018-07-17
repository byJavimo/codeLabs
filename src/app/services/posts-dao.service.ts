import { Injectable } from '@angular/core';
import { Post } from '../classes/post';
import { POSTS } from '../../mock/posts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsDAOService {

  constructor() { }

  getPosts(): Observable<Post[]>{
    return of(POSTS);
  }
}
