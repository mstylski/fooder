import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Units } from '../shared/models/product.model';

@Component({
  selector: 'app-cooking-conversion',
  templateUrl: './cooking-conversion.component.html',
  styleUrls: ['./cooking-conversion.component.scss']
})
export class CookingConversionComponent implements OnInit {
  readonly products = products;
  readonly unit: Units;

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
