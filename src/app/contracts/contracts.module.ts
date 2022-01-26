import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OntSharedModule } from '../otp-shared/ont-shared.module';


@NgModule({
  declarations: [
    ContractsComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OntSharedModule
  ]
})
export class ContractsModule { }
