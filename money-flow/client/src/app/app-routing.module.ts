import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { IsNotLoggedInGuard } from './guards/is-not-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [IsNotLoggedInGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [IsNotLoggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
