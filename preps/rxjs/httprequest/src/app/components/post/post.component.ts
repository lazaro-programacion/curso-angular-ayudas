import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.showPosts();
  }

  showPosts() {
    console.log("posts");
    this.postService.getPosts()
      .subscribe((data: Post[]) => this.posts = data);
  }

}
