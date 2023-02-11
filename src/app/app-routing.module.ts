import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MyWritesComponent } from './my-writes/my-writes.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'myWrites', component: MyWritesComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
