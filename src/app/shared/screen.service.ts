import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

const mdBreakpoint = '768px';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe([`(max-width: ${ mdBreakpoint })`])
    .pipe(
      map((state: BreakpointState) => state.matches),
      shareReplay(1),
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
