import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';
import { Event } from '../../models/event';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  events$!: Observable<Event[]>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events$ = this.eventService.findAll();
  }
}
