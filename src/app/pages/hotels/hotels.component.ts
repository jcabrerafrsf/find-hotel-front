import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { selectData } from '../login/store/auth.selectors';
import { HotelService } from 'src/app/services/hotel.service';
import * as moment from 'moment';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  userAccount: any;
  modelInit: any;
  modelLast: any;
  hotelForm!: FormGroup;
  checkForm = false;
  hotelList: any;
  total_page: any;
  currentPage: number = 1;
  loading: boolean = false;
  error: boolean = false;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private hotelServices: HotelService
  ) {
    this.store
      .pipe(select(selectData))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((state: any) => {
        this.userAccount = state;
      });
  }

  ngOnInit(): void {
    this.hotelForm = this.formBuilder.group({
      destination: [null, [Validators.required]],
      checkin: [null, [Validators.required]],
      checkout: [null, [Validators.required]],
      guests: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.currentPage = 1;
    this.hotelForm.valid ? this.retrieveHotels() : (this.checkForm = true);
  }

  // With "take" It makes sure that you’re getting the data only once.

  retrieveHotels() {
    this.loading = true;
    this.checkForm = false;
    this.error = false;
    this.hotelServices
      .getHotels(this.formatData(this.hotelForm.value))
      .pipe(take(1))
      .pipe((data) => {
        data.subscribe({
          next: ({ hotels, meta }) => {
            this.hotelList = hotels;
            this.total_page = Math.ceil(
              meta.summary.all_results.total_result_count / 10
            );
            this.loading = false;
          },
          error: (e) => {
            console.error('Error get hotels: ' + e);
            this.loading = false;
            this.error = true;
          },
        });
        return data;
      });
  }

  formatData(data: any) {
    return (data = {
      currency: 'USD',
      rooms: 1,
      sort_criteria: 'Overall',
      sort_order: 'desc',
      checkin: this.formatDate(data.checkin),
      checkout: this.formatDate(data.checkout),
      'guests[]': data.guests,
      destination: data.destination,
      page: this.currentPage,
      per_page: 10,
    });
  }

  formatDate(data: any) {
    return moment(`${data.year}-${data.month}-${data.day}`).format(
      'YYYY-MM-DD'
    );
  }

  changePage(data: any) {
    this.currentPage = data;
    this.retrieveHotels();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
