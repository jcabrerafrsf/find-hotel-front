import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHotelComponent } from './table-hotel.component';

describe('TableHotelComponent', () => {
  let component: TableHotelComponent;
  let fixture: ComponentFixture<TableHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
