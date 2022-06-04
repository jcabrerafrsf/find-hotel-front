import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectData } from '../login/store/auth.selectors';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  userAccount: any;

  constructor(
    private store: Store
  ) {
    this.store
    .pipe(select(selectData))
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((state: any) => {
      this.userAccount = state;
    });
   }

  ngOnInit(): void {
  }

}
