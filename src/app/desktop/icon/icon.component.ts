import {Component, Input, OnInit} from '@angular/core';
import {Size} from '../../data/size';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input()
  public icon: string;

  @Input()
  public name: string;

  @Input()
  public size: Size;

  constructor() {
  }

  ngOnInit(): void {
  }

  get iconUrl(): string {
    return 'assets/icons/' + this.icon + '.png';
  }

  get width(): string {
    if (this.size) {
      return this.size.width + '';
    }
    return 80 + '';
  }

  get height(): string {
    if (this.size) {
      return this.size.height + '';
    }
    return 100 + '';
  }

}
