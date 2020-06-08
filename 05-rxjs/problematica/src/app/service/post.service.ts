import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[];

  constructor() {
    this.posts = [
      new Post(2, "angular", "Perico"),
      new Post(3, "react", "La delicá de Gandía")
    ];
  }

  getPosts() {
    // fetch("http://localhost:4000/posts").then(res => res.json()).then(
    //   res => console.log(res)
    // );
    //return this.posts;
    return fetch("http://localhost:4000/comments")
      .then(res => res.json())
      .catch(console.error);
  }
}
