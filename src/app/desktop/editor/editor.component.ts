import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppWindow} from '../../data/appWindow';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @Input()
  public window: AppWindow;

  @Output()
  public windowMinimize = new EventEmitter<void>();

  @Output()
  public windowMaximize = new EventEmitter<void>();

  @Output()
  public windowClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
