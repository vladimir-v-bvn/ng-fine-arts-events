import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

export interface YourEvent {
  eventId: string
  eventName: string
  eventDate: string
  locationName: string
  locationCity: string
  locationLat: string
  locationLng: string
  eventpicId: string
}

@Injectable({ providedIn: 'root' })
export class YourEventsService {
  constructor(private http: HttpClient) { }
//private url = 'http://localhost:8080/FineArtsEventsEE-web/rest/events/yourevents'
  private url = 'http://localhost:8080/api/v1/events/vyourevents'
  getYourEvents(httpParams: HttpParams): Observable<YourEvent[]> {
    return this.http.get<YourEvent[]>(this.url, {params: httpParams });
  }
}
