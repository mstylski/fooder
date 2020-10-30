import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';


@Injectable()
export class Paginator extends MatPaginatorIntl {
  itemsPerPageLabel = 'On site';
  nextPageLabel = 'Next';
  previousPageLabel = 'Previous';

  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 z ${ length }`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} z ${length}`;
  }
}
