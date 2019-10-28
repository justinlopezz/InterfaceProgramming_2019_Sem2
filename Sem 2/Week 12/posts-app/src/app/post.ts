export class Post {
    userID: number;
    id: number;
    title: string;
    body: string;

    constructor(userId: number, id: number, title: string, body: string){
        this.userID = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}
