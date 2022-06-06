import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HotelSearch } from '../interfaces/hotelsearch';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
  * Retrieve all hotels for params
  * @param HttpParams with HotelSearch interface
  * @returns empty
  */
  getHotels(data: any) {
    return this.httpClient.get<any>(environment.hotelsUrl, {params: data});
  }

}
