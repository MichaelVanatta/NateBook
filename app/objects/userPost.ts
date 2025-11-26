export class User {
    id: number;
    username: string;
    nameColor: string;
    posts: Post[] = [];

    // Constructor to initialize the properties when a new instance is created
    constructor(id: number, username: string, nameColor: string) {
        this.id = id;
        this.username = username;
        this.nameColor = nameColor;
    }

    // Method to define behavior
    addPost(text: string): void {
        console.log(`User ${this.id} posted Message: \n${text}`);
        this.posts.push(new Post(text, this.id));
    }
}

export class Post {
    text: string;
    userId: number;

    // Constructor to initialize the properties when a new instance is created
    constructor(text: string, userId: number) {
        this.text = text;
        this.userId = userId;
    }
}