import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {PersonsApiService} from "./persons-api.service";
import {Person} from "../models/person.model";
import {isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class PersonsService implements OnInit{
  persons: any;
  constructor(private personsApiService: PersonsApiService) {
    console.log("Constructor");
    this.get_persons();
  }
  ngOnInit() {

  }
  async get_persons () {
    console.log("init");
    try {
      let gpersons = this.personsApiService.getPersons();
      this.persons = (isNullOrUndefined(await gpersons)) ? [] : await gpersons;
      console.log(this.persons);
    } catch (err) {
      console.log(err);
    }
  }
  get_person_by_id (id: number) {
    return this.persons.find(person => person.id === id);
  }
  async on_add_person (person: Person) {
    person.id = (this.persons.length)
      ? this.persons[this.persons.length - 1].id + 1
      : 1;
    this.persons.push(person);
    try {
      await this.personsApiService.postPersons({
        firstname: person.firstname, lastname: person.lastname});
    }
    catch (e) {
      console.error(e);
    }
  }
  async on_edit_person (ed_person: Person) {
    console.log("edit " + ed_person.id);
    console.log(this.persons);
    this.persons.splice (
      this.persons.findIndex (person => {person.id === ed_person.id}),
      1, ed_person);
    console.log(this.persons);
    try {
      await this.personsApiService.putPersons(ed_person.id, {
        firstname: ed_person.firstname, lastname: ed_person.lastname});
    }
    catch (e) {
      console.error(e);
    }
  }
  async on_del_person (del_person_id: number) {
    this.persons.splice(this.persons.indexOf(this.persons.find((element, index, array) => {
      return (element.id === del_person_id)
    })), 1);
    try {
      await this.personsApiService.deletePersons(del_person_id);
    }
    catch (e) {
      console.error(e);
    }
  }
}
