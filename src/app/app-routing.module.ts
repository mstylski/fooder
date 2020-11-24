import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { RegistrationComponent } from './auth/registration/registration.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipes/recipe-details/recipe-details.component';
import { RecipeResolveService } from './recipes/recipe-resolve.service';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { CookingConversionComponent } from './cooking-conversion/cooking-conversion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/recipes',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'recipes', component: RecipesComponent },
      { path: 'about-author', component: AboutAuthorComponent},
      { path: 'cooking-conversion', component: CookingConversionComponent},
      { path: 'recipes/:id', component: RecipeDetailsComponent, resolve: { recipe: RecipeResolveService } },
      { path: 'cooks/:id', component: RecipeDetailsComponent, resolve: { recipe: RecipeResolveService } },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'cooks', loadChildren: () => import('./cooks-module/cooks.module').then(m => m.CooksModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
