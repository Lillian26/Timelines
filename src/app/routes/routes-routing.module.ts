import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClistComponent }    from './clist/clist.component';

const routes: Routes = [
  { path: 'clist',  component: ClistComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesRoutingModule { }