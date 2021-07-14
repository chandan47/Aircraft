import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddairlineComponent } from './components/addairline/addairline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { BookflightComponent } from './components/bookflight/bookflight.component';
import { SearchflightComponent } from './components/searchflight/searchflight.component';
import { ManageairlineComponent } from './components/manageairline/manageairline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddairlineComponent,
    BookflightComponent,
    SearchflightComponent,
    ManageairlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
