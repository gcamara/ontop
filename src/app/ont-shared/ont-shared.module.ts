import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/ont-header.component';
import { OntButtonComponent } from '../ont-button/ont-button.component';
import { RouterModule } from '@angular/router';
import { OntMenuItemComponent } from '../header/ont-menu-item/ont-menu-item.component';
import { OntUserDetailsComponent } from '../ont-user-details/ont-user-details.component';
import { OntSearchBarComponent } from '../ont-search-bar/ont-search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OntDropdownComponent } from '../ont-dropdown/ont-dropdown.component';


const components = [
  HeaderComponent,
  OntButtonComponent,
  OntMenuItemComponent,
  OntUserDetailsComponent,
  OntDropdownComponent,
  OntSearchBarComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...components
  ]
})
export class OntSharedModule { }
