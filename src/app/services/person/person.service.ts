import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: any[] = [];

  addPerson(person: any) {
    if(this.persons.length < 9) {
    this.persons.push(person);
    }
  }

}
