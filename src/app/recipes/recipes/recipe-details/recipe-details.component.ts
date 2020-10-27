import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { RecipeResolveService } from '../../recipe-resolve.service';


@Component({
  selector: 'app-receipt-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})


export class RecipeDetailsComponent implements OnInit {
  recipe: Data = RecipeResolveService;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => this.recipe = data.recipe);
  }
}
