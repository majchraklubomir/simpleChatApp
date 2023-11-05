import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PersonService } from 'src/app/services/person/person.service';

@Component({
  selector: 'app-grid-area',
  templateUrl: './grid-area.component.html',
  styleUrls: ['./grid-area.component.css']
})
export class GridAreaComponent {
  constructor(private personService: PersonService) {}

  get persons() {
    return this.personService.persons;
  }
}
