import { Tag } from './tag';


export class Note {
    create_date: Date;
    title: string;
    content: string;
    tags: Tag[];

    constructor(title, content) {
        this.create_date = new Date();
        this.title = title;
        this.content = content;
        this.tags = [];
     }
}
