import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from '../../user/user.service';
import { CooksResponse, User } from '../../shared/models/user.model';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CooksRecipesComponent } from '../../cooks-recipes/cooks-recipes.component';
import { ScreenService } from '../../shared/screen.service';


const ELEMENT_DATA: CooksResponse[] = [];


@Component({
  selector: 'app-cooks',
  templateUrl: './cooks.component.html',
  styleUrls: ['./cooks.component.scss'],
})


export class CooksComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService,
              private bottomSheet: MatBottomSheet,
              private screenService: ScreenService) {
    this.isMobile$.subscribe(console.log);
  }
  displayedColumns: string[] = ['avatar', 'name', 'surname', 'gender', 'city',
    'diet', 'numberOfRecipes', 'lastLogged', 'showProfile'];
  dataSource = new MatTableDataSource<CooksResponse>(ELEMENT_DATA);
  cooks: CooksResponse;

  private readonly searchBar$ = new BehaviorSubject<string>('');
  private readonly pagination$ = new BehaviorSubject<PageEvent>({ length: 0, pageIndex: 1, pageSize: 20 });
  page: number;
  limit: number;
  city: string;
  sumOfRecipes: number;
  readonly isMobile$ = this.screenService.isMobile$;
  private readonly subscriptions = new Subscription();

  ngOnInit() {
    this.fetchCooks();
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

  showRecipe(cook: User) {
    this.bottomSheet.open(CooksRecipesComponent, { data: cook, panelClass: 'bottom-sheet' });
  }

  private fetchCooks() {
    const subscription = combineLatest([this.searchBar$, this.pagination$])
      .pipe(
        debounceTime(400),
        switchMap(([city, pageEvent]) => {
          return this.userService.getCooks(pageEvent.pageIndex, pageEvent.pageSize, city);
        })
      )
      .subscribe(cooks => {
        this.cooks = cooks;
        this.caluclateTotalNumberOfRecipes();
      });
    this.subscriptions.add(subscription);
  }

  private caluclateTotalNumberOfRecipes() {
    this.sumOfRecipes = this.cooks.cooks.reduce((acc, cook) => acc + cook.recipes.length, 0);
  }
}
