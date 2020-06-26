import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService, private routerService: Router) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.postService.deletePost(this.index)
  }

  onEdit() {
    this.routerService.navigate([this.index, "post-edit"])
  }
}
