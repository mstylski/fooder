import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { RecipesModule } from './recipes/recipes.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeadersInterceptor } from './auth/http-headers.interceptor';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipes/recipe.service';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { CookingConversionComponent } from './cooking-conversion/cooking-conversion.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutAuthorComponent,
    CookingConversionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    RecipesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
