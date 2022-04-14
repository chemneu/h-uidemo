import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppWindow} from '../../data/appWindow';
import {GameEngine} from '../../game-engine';
import {PagelEvent} from '../../data/pagel-event';
import {PagelEventType} from '../../data/pagel-event-type';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  selectedSender = -1;

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
    return this.engine.getByEventType(PagelEventType.Mail);
  }


  getVisibleText(): string {
    if (this.selectedSender < 0) {
      return '';
    }
    return this.getEvents()[this.selectedSender].message;
  }

}
