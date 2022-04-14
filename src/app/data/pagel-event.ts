import {PagelEventType} from './pagel-event-type';

export class PagelEvent {

  eventType: PagelEventType;
  sender: string;
  message: string;
  creationDate: Date = new Date();


  constructor(eventType: PagelEventType, sender: string, message: string) {
    this.eventType = eventType;
    this.sender = sender;
    this.message = message;
  }
}
