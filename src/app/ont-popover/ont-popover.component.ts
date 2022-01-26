import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ont-popover',
  templateUrl: './ont-popover.component.html',
  styleUrls: ['./ont-popover.component.scss']
})
export class OntPopoverComponent implements OnInit {

  /**
   * Controls the popover display state.
   */
  @Input()
  @HostBinding('class.show')
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

}
