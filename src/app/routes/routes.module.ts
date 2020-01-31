import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { ClistComponent }    from './clist/clist.component';

import { RoutesRoutingModule } from './routes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutesRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [
    ClistComponent
  ]
})
export class RoutesModule {}