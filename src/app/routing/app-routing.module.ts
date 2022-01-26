import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContractsModule } from '../contracts/contracts.module';

const routes: Route[] = [
  { path: '', loadChildren: () => import('../contracts/contracts.module').then(m => m.ContractsModule) }
]

@NgModule({
  imports: [
    ContractsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
