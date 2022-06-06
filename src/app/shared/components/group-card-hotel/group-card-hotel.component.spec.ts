import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCardHotelComponent } from './group-card-hotel.component';

describe('GroupCardHotelComponent', () => {
  let component: GroupCardHotelComponent;
  let fixture: ComponentFixture<GroupCardHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCardHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCardHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
