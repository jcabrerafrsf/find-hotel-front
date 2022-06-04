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
    private http: HttpClient
  ) { }

  getAirlines() {
    return this.http.get<Airline[]>(environment.airlineUrl);
  }

}
