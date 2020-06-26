import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  editMode = false;
  indexToUpdate: number;
  postForm: FormGroup;
  constructor(private postService: PostService, private routerService: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let title = ''
    let desc = ''
    let imagePath = ''

    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        this.editMode = true
        this.indexToUpdate = +params['index']

        const post: Post = this.postService.getPost(+params['index'])
        title = post.title;
        desc = post.desc;
        imagePath = post.imagePath;
      }
    });

    this.postForm = new FormGroup({
      title: new FormControl(title, Validators.required),
      desc: new FormControl(desc, [Validators.required, Validators.minLength(5)]),
      imagePath: new FormControl(imagePath, Validators.required),
    });
  }

  onSubmit() {

    // Creating Object
    const post = new Post(
      this.postForm.value.title,
      this.postForm.value.desc,
      this.postForm.value.imagePath,
      "admin@admin.com",
      new Date()
    )

    if (this.editMode) {
      this.postService.updatePost(this.indexToUpdate, post)
    } else {
      this.postService.addPost(post)
    }

    // Resetting Form
    this.postForm.reset()

    //Navigating
    this.routerService.navigate(['/post-list'])
  }

  onCancel() {
    this.routerService.navigate(['/post-list'])
  }
}
