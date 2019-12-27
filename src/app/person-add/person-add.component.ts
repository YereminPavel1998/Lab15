import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from "../shared/models/person.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonsService} from "../shared/services/persons.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  id: number;
  addForm: FormGroup;
  disabled_form = false;
  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private personsServise: PersonsService) {
    this.activatedRouter.params.subscribe(param => {
       this.id = param.id;
    });
    if (!isNullOrUndefined(this.id))console.log(this.id);
  }

  ngOnInit() {
    let ed_person = this.personsServise.get_person_by_id(this.id);
    console.log (ed_person);
    if (isNullOrUndefined(ed_person)) ed_person = {firstname: "", lastname: ""};
    this.addForm = new FormGroup( {
      firstname: new FormControl({value: ed_person.firstname, disabled: this.disabled_form}, [Validators.required]),
      lastname: new FormControl({value: ed_person.lastname, disabled: this.disabled_form}, [Validators.required])
    })
  }
  test(elm) {
    console.log(elm);
  }
  on_save() {
    if (this.id) {
      let person = new Person (this.addForm.value.firstname, this.addForm.value.lastname, this.id);
      this.personsServise.on_edit_person(person);
    }
    else {
      let person = new Person (this.addForm.value.firstname, this.addForm.value.lastname);
      this.personsServise.on_add_person(person);
    }
    this.router.navigate([`/list`]);

  }
}
