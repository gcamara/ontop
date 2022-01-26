import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ont-dropdown',
  templateUrl: './ont-dropdown.component.html',
  styleUrls: ['./ont-dropdown.component.scss']
})
export class OntDropdownComponent implements OnInit {

  /**
   * Will be the first option of the select.
   */
  @Input()
  placeholder!: string;

  @Input()
  icon!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
