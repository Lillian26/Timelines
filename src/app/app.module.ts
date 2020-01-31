import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';

// import { ClistComponent } from './routes/checkbox-list/clist/clist.component';

@NgModule({
  declarations: [
    AppComponent
    // ClistComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
