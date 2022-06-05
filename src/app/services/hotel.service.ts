import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getHotels(data: any) {
    let queryParams = new HttpParams();
    debugger
    return this.httpClient.get<any>(environment.hotelsUrl, {params: data});
  }

}
