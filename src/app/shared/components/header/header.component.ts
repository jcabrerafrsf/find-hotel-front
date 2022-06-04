import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectData } from 'src/app/pages/login/store/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
      debugger
    });
   }

  ngOnInit(): void {
  }

}
