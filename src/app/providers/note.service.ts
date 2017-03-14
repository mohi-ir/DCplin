import { Injectable } from '@angular/core';

import { Note } from '../model/note';

@Injectable()
export class NoteService {
  notes: Note[] = [
    {title: 'First', content: 'this is my first note', create_date: new Date(), tags: []},
    {title: 'Shiraz', content: 'Beautiful city', create_date: new Date(), tags: []},
    {title: 'Fitness', content: 'Cardio is the best place to start a fitness program', create_date: new Date(), tags: []}
  ];

  constructor() { }

  getNotes(): Promise<Note[]> {
    return Promise.resolve(this.notes);
  }
}
