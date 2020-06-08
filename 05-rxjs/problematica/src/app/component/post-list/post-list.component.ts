import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  public posts: Post[];

  constructor(private postService: PostService ) {}

  ngOnInit(): void {
    this.postService.getPosts().then(
      res => this.posts = res
    );
  }

}
