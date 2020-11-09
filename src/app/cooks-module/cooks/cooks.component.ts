import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { UserService } from '../../user/user.service';
import { CooksResponse } from '../../shared/models/user.model';
import { BehaviorSubject, combineLatest } from 'rxjs';



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
export class CooksComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'name', 'surname', 'city',
    'diet', 'numberOfRecipes', 'lastLogged', 'showProfile'];
  dataSource = new MatTableDataSource<CooksResponse>(ELEMENT_DATA);
  cooks: CooksResponse[] = [];
  private readonly searchBar$ = new BehaviorSubject<string>('');
  private readonly pagination$ = new BehaviorSubject<PageEvent>({ length: 0, pageIndex: 1, pageSize: 20 });
  page: number;
  limit: number;
  city: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    combineLatest([this.searchBar$, this.pagination$])
      .subscribe(([city, pageEvent]) => console.log(city, pageEvent));
  }

  constructor(private userService: UserService) {
  }

  getCooks() {
    this.userService.getCooks(this.page, this.limit, this.city).subscribe(cooks => {
      this.cooks = cooks;
    });
  }

  changePage(event: PageEvent) {
    this.pagination$.next(event);
  }

  search(query: string) {
    this.searchBar$.next(query);
  }


}
