import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

const Modules = [
  RouterModule,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModule
];

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    ...Modules
  ],
  exports: [
    ...Modules,
    SpinnerComponent
  ]
})
export class SharedModule {
}
