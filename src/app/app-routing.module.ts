import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Imported components used in routes

import {HomeComponent} from './home/home.component';
import {CourseHomeComponent} from './course-home/course-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'course/:name', component: CourseHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
