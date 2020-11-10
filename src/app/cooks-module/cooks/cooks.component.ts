import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { UserService } from '../../user/user.service';
import { CooksResponse } from '../../shared/models/user.model';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';


export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};


const ELEMENT_DATA: CooksResponse[] = [];


@Component({
  selector: 'app-cooks',
  templateUrl: './cooks.component.html',
  styleUrls: ['./cooks.component.scss'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
  ],
})


export class CooksComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['avatar', 'name', 'surname', 'city',
    'diet', 'numberOfRecipes', 'lastLogged', 'showProfile'];
  dataSource = new MatTableDataSource<CooksResponse>(ELEMENT_DATA);
  cooks: CooksResponse;

  private readonly searchBar$ = new BehaviorSubject<string>('');
  private readonly pagination$ = new BehaviorSubject<PageEvent>({ length: 0, pageIndex: 1, pageSize: 20 });
  page: number;
  limit: number;
  city: string;
  sumOfRecipes;
  numberOfRecipes;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  private readonly subscriptions = new Subscription();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    const subscription = combineLatest([this.searchBar$, this.pagination$])
      .pipe(
        debounceTime(400),
        switchMap(([city, pageEvent]) => {
          return this.userService.getCooks(pageEvent.pageIndex, pageEvent.pageSize, city);
        })
      )
      .subscribe(cooks => {
        this.cooks = cooks;
        this.sumOfRecipes = this.cooks.cooks.reduce((acc, cook) => acc + cook.recipes.length, 0);
        this.numberOfRecipes = this.cooks.cooks.map((cook) => cook.numberOfRecipes);
      });
    this.subscriptions.add(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  changePage(event: PageEvent) {
    this.pagination$.next(event);
  }

  search(query: string) {
    this.searchBar$.next(query);
  }
}
