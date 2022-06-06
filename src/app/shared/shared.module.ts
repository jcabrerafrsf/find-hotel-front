import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableHotelComponent } from './components/table-hotel/table-hotel.component';
import { CardHotelComponent } from './components/card-hotel/card-hotel.component';
import { GroupCardHotelComponent } from './components/group-card-hotel/group-card-hotel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TableHotelComponent,
    CardHotelComponent,
    GroupCardHotelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TableHotelComponent,
    CardHotelComponent,
    GroupCardHotelComponent
  ]
})
export class SharedModule { }
