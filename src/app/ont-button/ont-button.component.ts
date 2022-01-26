import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ButtonColors, ButtonType } from '../types/types';

@Component({
  selector: 'ont-button',
  templateUrl: './ont-button.component.html',
  styleUrls: ['./ont-button.component.scss']
})
export class OntButtonComponent implements OnInit {

  /**
   * Attaches the type of the button and changes the css.
   */
  @HostBinding('attr.type')
  @Input()
  type: string = ButtonType.REGULAR;

  /**
   * An icon to be displayed or not.
   */
  @Input()
  icon!: string;

  /**
   * An optional label.
   */
  @Input()
  label!: string;

  /**
   * The color of the button.
   * Defaults to pink.
   */
  @HostBinding('attr.color')
  @Input()
  color: string = ButtonColors.DEFAULT;


  constructor() { }

  ngOnInit(): void {
  }

}
