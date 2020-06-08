import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[];

  constructor(private http: HttpClient) {
    }

  getPosts() {
    //   return fetch("http://localhost:4000/posts")
    //     .then(res => res.json())
    //     .catch(console.error);
    // }
    return this.http.get<Post[]>
      ("http://localhost:4000/posts");
  }
}
