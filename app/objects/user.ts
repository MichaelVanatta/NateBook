class User {
    id: number;
    username: string;
    //user: User;

    // Constructor to initialize the properties when a new instance is created
    constructor(id: number, username: string/*, user: User*/) {
        this.id = id;
        this.username = username;
        //this.user = user;
    }

    // Method to define behavior
    greet(): void {
        console.log(`User ${this.id} has Username ${this.username}`);
    }
}