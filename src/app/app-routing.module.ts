import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CharactersComponent } from './views/characters/characters.component';
import { ComicsComponent } from './views/comics/comics.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'characters', component: CharactersComponent
  },
  {
    path:'characters/comics/:id', component: ComicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
