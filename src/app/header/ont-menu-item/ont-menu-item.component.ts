import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/types/types';

@Component({
  selector: 'ont-menu-item',
  templateUrl: './ont-menu-item.component.html',
  styleUrls: ['./ont-menu-item.component.scss']
})
export class OntMenuItemComponent implements OnInit {

  @Input()
  menu!: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
