import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-hotel',
  templateUrl: './table-hotel.component.html',
  styleUrls: ['./table-hotel.component.scss']
})
export class TableHotelComponent implements OnInit {

  @Input() hotelList: any;
  @Input() total_page: number = 1;
  public pageNumber = 1;
  public indexFirstItem = 0;

  @Output() pagEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

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
  }

}
