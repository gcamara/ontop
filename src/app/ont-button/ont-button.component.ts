import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ButtonColors, ButtonType } from '../types/types';

@Component({
  selector: 'ont-button',
  templateUrl: './ont-button.component.html',
  styleUrls: ['./ont-button.component.scss']
})
export class OntButtonComponent implements OnInit {

  @HostBinding('attr.type')
  @Input()
  type: string = ButtonType.REGULAR;

  @Input()
  icon!: string;

  @Input()
  label!: string;

  @HostBinding('attr.color')
  @Input()
  color: string = ButtonColors.DEFAULT;


  constructor() { }

  ngOnInit(): void {
  }

}
