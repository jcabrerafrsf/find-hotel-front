import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-group-card-hotel',
  templateUrl: './group-card-hotel.component.html',
  styleUrls: ['./group-card-hotel.component.scss'],
})
export class GroupCardHotelComponent implements OnInit {
  @Input() hotelList: any;
  @Input() total_page: number = 1;
  public pageNumber = 1;
  public indexFirstItem = 0;

  @Output() pagEmitter: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  previousPage(): void {
    if (this.indexFirstItem > 1) {
      this.pageNumber = this.pageNumber - 1;
      this.indexFirstItem = this.indexFirstItem - 10;
      this.loadPage();
    }
  }

  nextPage(): void {
    if (this.pageNumber < this.total_page) {
      this.pageNumber = this.pageNumber + 1;
      this.indexFirstItem = this.indexFirstItem + 10;
      this.loadPage();
    }
  }

  loadPage(): void {
    this.pagEmitter.emit(this.pageNumber);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
