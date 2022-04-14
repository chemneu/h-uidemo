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

  public selectedSender = -1;

  public response = '';
  public responses: string[] = [];

  public readItems = [];

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

  public getEvents(): PagelEvent[] {
    return this.engine.getByEventType(PagelEventType.Chat);
  }


  public getVisibleText(): string {
    if (this.selectedSender < 0) {
      return '';
    }
    return this.getEvents()[this.selectedSender].message;
  }

  public send(): void {
    this.responses.push(this.response);
    this.response = '';
  }
}
