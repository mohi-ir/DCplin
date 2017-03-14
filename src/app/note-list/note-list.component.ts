import { Component, OnInit } from '@angular/core';

import { Note } from '../model/note';
import { NoteService } from '../providers/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[]

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().then(notes => {
      this.notes = notes;
    });
  }

}
