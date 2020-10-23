import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
@Input()  recipe: {};
  constructor() { }

  ngOnInit(): void {
  }

}
