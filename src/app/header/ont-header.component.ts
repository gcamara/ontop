import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'ont-header',
  templateUrl: './ont-header.component.html',
  styleUrls: ['./ont-header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * An observable with the available menus for current logged user.
   */
  menus$ = this.service.getAvailableMenus();

  constructor(private service: MenuService) { }

  ngOnInit(): void {
  }

}
