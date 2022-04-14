import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PagelEvent} from './data/pagel-event';
import {PagelEventType} from './data/pagel-event-type';

@Injectable()
export class GameEngine {

  static thrownEvents: PagelEvent[] = [];
  static newEvent: PagelEvent = null;

  private interval;
  private messageProbability = 50; // Wahrscheinlichkeit, das eine Message innerhalb von 10 Sekunden auftaucht

  private possibleEvents: PagelEvent[] = [];

  constructor(private readonly http: HttpClient) {
    this.http.get('assets/event/event.csv', {responseType: 'text'})
      .subscribe(
        data => {
          const rows = data.split('\r\n');
          for (let i = 0; i < rows.length; i++) {
            const line = rows[i].split(';');
            if (line.length === 3) {
              if (line[0] === 'Mail') {
                this.possibleEvents.push(new PagelEvent(PagelEventType.Mail, line[1], line[2]));
              } else {
                this.possibleEvents.push(new PagelEvent(PagelEventType.Chat, line[1], line[2]));
              }
            }
          }
          console.log(this.possibleEvents);
        },
        error => {
          console.log(error);
        }
      );

    this.interval = setInterval(() => {
      if (this.possibleEvents.length > 0) {
        const throwEvent = Math.floor(Math.random() * 100) < this.messageProbability;
        if (throwEvent) {
          const eventToThrow = Math.floor(Math.random() * this.possibleEvents.length);
          const newEvent = this.possibleEvents[eventToThrow];
          newEvent.creationDate = new Date();
          GameEngine.thrownEvents.push(newEvent);
          GameEngine.newEvent = newEvent;
        } else {
          GameEngine.newEvent = null;
        }
      }
    }, 5000);
  }

  public getByEventType(type: PagelEventType): PagelEvent[] {
    return GameEngine.thrownEvents.filter(e => e.eventType === type);
  }

  public getNewEvent(): PagelEvent {
    if (GameEngine.newEvent && GameEngine.newEvent.creationDate.getTime() > (new Date().getTime() - 1000)) {
      return GameEngine.newEvent;
    } else {
      return null;
    }
  }


}
