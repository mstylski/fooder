import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { RegistrationComponent } from './auth/registration/registration.component';
import { RecipeFormModalComponent } from './recipes/recipe-form-modal/recipe-form-modal.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [{path: 'recipes', component: RecipesComponent },
] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
