import { Component } from '@angular/core';
import { PersonService } from 'src/app/services/person/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private personService: PersonService) {}

  addPerson() {
    this.personService.addPerson({});
  }
}
