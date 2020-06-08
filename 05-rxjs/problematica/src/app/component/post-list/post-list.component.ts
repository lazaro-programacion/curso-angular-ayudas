import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/models/post';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  public posts$: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.postService.getPosts().then(
    //   res => this.posts = res
    // );
    this.fetchPosts();
  }

  private fetchPosts() {
    console.log("traete las entradas");
    this.posts$ = this.postService.getPosts();
    // .subscribe(
    //   msg => this.posts = msg
    // );
  }



}
