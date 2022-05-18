import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class EventService {
  private _specialEventsUrl = "https://demo.credy.in/api/v1/maya/movies/";

  constructor(private http: HttpClient) {}


  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl);
  }
}
