import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/events",
    pathMatch: "full",
  },

  {
    path: "special",
    // canActivate: [AuthGuard],
    component: SpecialEventsComponent,
  },
  {
    path: "movies",
    component: MoviesComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
