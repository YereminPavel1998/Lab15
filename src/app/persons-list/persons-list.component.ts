import { Component, OnInit } from '@angular/core';
import {PersonsService} from "../shared/services/persons.service";

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  constructor(private personsService: PersonsService) { }

  ngOnInit() {
  }

}
