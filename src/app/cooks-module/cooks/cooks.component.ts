import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { UserService } from '../../user/user.service';
import { UserResponse } from '../../shared/models/user.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-cooks',
  templateUrl: './cooks.component.html',
  styleUrls: ['./cooks.component.scss'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ],
})
export class CooksComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'name', 'surname', 'city',
    'diet', 'numberOfRecipes', 'lastLogged', 'showProfile', 'showRecipes'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  cooks: UserResponse[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private userService: UserService) {
  }

  getCooks() {
    this.userService.getCooks().subscribe(cooks => {
      this.cooks = cooks;
    });
  }

}
