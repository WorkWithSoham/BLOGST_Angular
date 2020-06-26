import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.listChanged.subscribe((posts: Post[]) => {
      this.listOfPosts = posts
    })
    this.listOfPosts = this.postService.getPosts();
  }

  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }
}
