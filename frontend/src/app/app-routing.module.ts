import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPage } from './auth-page/auth-page';

const routes: Routes = [
  { path: '', component: AuthPage }, 
  { path: 'login', component: AuthPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }