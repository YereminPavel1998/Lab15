import { Component, OnInit } from '@angular/core';
import {PersonsService} from "../shared/services/persons.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  firstname_filter: boolean;
  search_firstname = "";
  search_lastname = "";
  lastname_filter: boolean;
  constructor(private personsService: PersonsService) { }

  ngOnInit() {
  }
  toggle_lastname_filter() {
    this.lastname_filter = !this.lastname_filter;
    this.search_lastname = "";
  }
  toggle_firstname_filter() {
    this.firstname_filter = !this.firstname_filter;
    this.search_firstname = "";
  }
}
