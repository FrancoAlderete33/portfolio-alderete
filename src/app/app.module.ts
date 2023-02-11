import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWritesComponent } from './my-writes/my-writes.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MyWritesComponent,
    AboutMeComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
