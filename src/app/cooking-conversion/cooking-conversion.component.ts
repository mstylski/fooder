import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cooking-conversion',
  templateUrl: './cooking-conversion.component.html',
  styleUrls: ['./cooking-conversion.component.scss']
})
export class CookingConversionComponent implements OnInit {
  products = products;

  modelForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.modelForm = this.formBuilder.group({
      product: [''],
      count: [1]
    });
  }
}
