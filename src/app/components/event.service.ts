import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,map } from "rxjs";
import { Event } from "src/app/models/event";

@Injectable({
    providedIn: 'root'
})
export class EventService {
    constructor(private http: HttpClient) { }

    findAll(): Observable<Event[]> {
        return this.http.get<Event[]>('http://localhost:8080/events').pipe(map((response=> {console.log(response);return response})));   
    }
}