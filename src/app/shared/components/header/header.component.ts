import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectData } from 'src/app/pages/login/store/auth.selectors';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  userAccount: any;

  constructor(
    private store: Store,
    private authService: AuthService
  ) {
    this.store
    .pipe(select(selectData))
    .subscribe((state: any) => {
      if(state) {
        this.userAccount = state;  
      }
    });
   }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
