export class User {
    id: number;
    username: string;
    nameColor: string;
    messages: Message[] = [];

    // Constructor to initialize the properties when a new instance is created
    constructor(id: number, username: string, nameColor: string) {
        this.id = id;
        this.username = username;
        this.nameColor = nameColor;
    }

    // Method to define behavior
    addPost(messageId: number, text: string): Message {
        console.log(`User ${this.id} posted Message: \n${text}`);
        var m = new Message(messageId, text, this.id);
        this.messages.push(m);

        return m;
    }
}

export class Message {
    id: number;
    text: string;
    userId: number;

    // Constructor to initialize the properties when a new instance is created
    constructor(id: number, text: string, userId: number) {
        this.id = id;
        this.text = text;
        this.userId = userId;
    }
}