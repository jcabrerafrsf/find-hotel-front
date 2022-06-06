import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airline } from '../interfaces/airline';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
  * Retrieve airlines.
  * @param 
  * @returns Observable
*/
  getAirlines() {
    return this.httpClient.get<Airline[]>(environment.airlineUrl);
  }

}
