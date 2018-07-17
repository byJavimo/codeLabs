import { Component, OnInit } from '@angular/core';
import {PostsDAOService} from '../../app/services/posts-dao.service';
import {Post} from '../../app/classes/post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private postsDAOService: PostsDAOService) { }

  getPosts(): void {
    this.postsDAOService.getPosts().subscribe(posts => this.posts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

}