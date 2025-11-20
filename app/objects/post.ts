class Post {
    text: string;
    //user: User;

    // Constructor to initialize the properties when a new instance is created
    constructor(text: string/*, user: User*/) {
        this.text = text;
        //this.user = user;
    }

    // Method to define behavior
    greet(): void {
        console.log(`Hello, my name is ${this.text} and I am asdf years old.`);
    }
}