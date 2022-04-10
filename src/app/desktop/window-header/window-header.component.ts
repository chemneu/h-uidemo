import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icon} from '../../data/icon';

@Component({
  selector: 'app-window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.scss']
})
export class WindowHeaderComponent implements OnInit {

  @Input()
  icon: Icon;

  @Output()
  windowMinimize = new EventEmitter<void>();

  @Output()
  windowMaximize = new EventEmitter<void>();

  @Output()
  windowClose = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
