import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
// import { MaterialModule } from '@angular/material/core';
import 'hammerjs';
import { FormsModule }    from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { ClistComponent }    from './clist/clist.component';

import { RoutesRoutingModule } from './routes-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutesRoutingModule,
    ReactiveFormsModule,
    // MaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'projects', component: ProjectsComponent, pathMatch: 'full'},
      { path: 'contact', component: ContactComponent, pathMatch: 'full'},

      ]) 

  ],
  declarations: [
    ClistComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent
  ]
})
export class RoutesModule {}