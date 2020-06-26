export class Post {
    constructor(
        public title: string,
        public desc: string,
        public imagePath: string,
        public author: string,
        public postDate: Date,
    ) { }
}