import {Position} from './position';
import {Size} from './size';
import {Application} from './application';

export class Icon {
  public position: Position;
  public size: Size;
  public icon: string;
  public name: string;
  public application: Application;

  constructor(position: Position, size: Size, icon: string, name: string, application: Application) {
    this.position = position;
    this.size = size;
    this.icon = icon;
    this.name = name;
    this.application = application;
  }
}
