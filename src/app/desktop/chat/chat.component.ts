import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppWindow} from '../../data/appWindow';
import {GameEngine} from '../../game-engine';
import {PagelEventType} from '../../data/pagel-event-type';
import {PagelEvent} from '../../data/pagel-event';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  selectedSender = -1;

  response = '';
  responses: string[] = [];

  readItems = [];

  @Input()
  public window: AppWindow;

  @Output()
  public windowMinimize = new EventEmitter<void>();

  @Output()
  public windowMaximize = new EventEmitter<void>();

  @Output()
  public windowClose = new EventEmitter<void>();

  constructor(private engine: GameEngine) {
  }

  ngOnInit(): void {
  }

  getEvents(): PagelEvent[] {
    return this.engine.getByEventType(PagelEventType.Chat);
  }


  getVisibleText(): string {
    if (this.selectedSender < 0) {
      return '';
    }
    return this.getEvents()[this.selectedSender].message;
  }

  send(): void {
    this.responses.push(this.response);
    this.response = '';
  }
}
