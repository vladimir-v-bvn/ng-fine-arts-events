import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface TopEvent {
  eventId: string
  eventName: string
  eventDate: string
  locationName: string
  locationCity: string
  eventpicId: string
}

@Injectable({ providedIn: 'root' })
export class TopEventsService {
  constructor(private http: HttpClient) { }
  
//url = 'http://localhost:8080/FineArtsEventsEE-web/rest/events/topevents'
  url = 'http://localhost:8080/api/v1/events/vtopevents'
  getTopEvents(): Observable<TopEvent[]> {
  //this.http.get<TopEvent[]>(this.url).subscribe(te => console.log(te));
    return this.http.get<TopEvent[]>(this.url)
  }
}
