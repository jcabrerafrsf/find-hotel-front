import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectData } from '../login/store/auth.selectors';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  userAccount: any;

  modelInit: any;
  modelLast: any;

  hotelForm!: FormGroup;

  checkForm = false;

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
    this.hotelForm.valid
      ? this.hotelServices.getHotels(this.formatData(this.hotelForm.value)).subscribe()
      : (this.checkForm = true);
  }

  formatData(data: any) {
    return data = {
      currency: "USD",
      rooms: 1,
      sort_criteria: "Overall",
      sort_order: "desc",
      checkin: `${data.checkin.year}-${data.checkin.month}-${data.checkin.day}`,
      checkout: `${data.checkout.year}-${data.checkout.month}-${data.checkout.day}`,
      'guests[]': data.guests,
      destination: data.destination,
      page: 1,
      per_page: 10,
    };
  }

  formatDate(data: any) {
    data.day = 12
    data.month = 6
    data.year = 2022
  }

}
