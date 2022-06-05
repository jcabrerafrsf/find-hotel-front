import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableHotelComponent } from './components/table-hotel/table-hotel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TableHotelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TableHotelComponent
  ]
})
export class SharedModule { }
