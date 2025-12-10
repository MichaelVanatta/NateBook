// import { messageRes } from '../../types/natebooktypes';

export class User {
    id: number | null;
    username: string;
    nameColor: string | null;
    messages: Message[] = [];

    // Constructor to initialize the properties when a new instance is created
    constructor(id: number | null, username: string, nameColor: string | null) {
        this.id = id;
        this.username = username;
        this.nameColor = nameColor;
    }

    // Method to define behavior
}

export class Message {
    id: number;
    text: string;
    userId: number | null;

    // Constructor to initialize the properties when a new instance is created
    constructor(id: number, text: string, userId: number | null) {
        this.id = id;
        this.text = text;
        this.userId = userId;
    }
}

export async function addMessageToUser(user: User, messageId: number, text: string) {
    console.log(`User ${user.id} posted Message: \n${text}`);
        let m = new Message(messageId, text, user.id);
        user.messages.push(m);

        return m;
}
export async function populateMessages(user: User) {
    const messageRes = await $fetch('/api/getmessagesbyuser', {
        method: 'POST',
        body: {
            user_id: user.id
        }
    });

    return messageRes
}