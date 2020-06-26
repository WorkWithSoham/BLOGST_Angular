import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
    listChanged = new Subject<Post[]>();
    listOfPosts: Post[] = [
        // new Post(
        //     "World Ocean day!",
        //     "An ocean is a body of water that composes much of a planet's hydrosphere.On Earth, an ocean is one of the major conventional divisions of the World Ocean.These are, in descending order by area, the Pacific, Atlantic, Indian, Southern, and Arctic Oceans",
        //     "https://www.ecomagazine.com/images/Newsletter/0_2019/Week_11-18-19/birdseyeview_ocean.jpg",
        //     "admin@admin.com",
        //     new Date()
        // ),
        // new Post(
        //     "Nature wonder!",
        //     "Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication Nature features peer-reviewed research from a variety of academic disciplines, mainly in science, technology, and the natural sciences",
        //     "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0,432,7360,4048&wid=4000&hei=2200&scl=1.84",
        //     "admin@admin.com",
        //     new Date()
        // ),
        // new Post(
        //     "Criket",
        //     "Real Cricket™ is here and here to stay! For the first time, we bring to you our hit cricket franchise and rich cricketing experience with Real Cricket™ 20! The most ...",
        //     "https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/09/24/Pictures/file-photo-pakistan-cricket-world-cup-india_baa3875a-de87-11e9-93be-d8edb8f85faf.jpg",
        //     "admin@admin.com",
        //     new Date()
        // ),
    ];

    getPosts() {
        return this.listOfPosts;
    }

    setPost(posts: Post[]) {
        this.listOfPosts = posts.reverse()
        this.listChanged.next(this.listOfPosts)
    }

    getPost(index: number) {
        return this.listOfPosts[index]
    }

    deletePost(index: number) {
        this.listOfPosts.splice(index, 1);
    }

    addPost(post: Post) {
        this.listOfPosts.push(post)
    }

    updatePost(index: number, post: Post) {
        this.listOfPosts[index] = post
    }
}