import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss']
})
export class CardHotelComponent implements OnInit {

  @Input() hotel: any;
  @Output() detailEmiter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seeDetail(event: number) {
    this.detailEmiter.emit(event);
    alert("EVENT: " + event);
  }



}
