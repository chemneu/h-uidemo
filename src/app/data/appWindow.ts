import {Size} from './size';
import {Application} from './application';
import {Icon} from './icon';

export class AppWindow {
  public zIndex: number;
  public app: Application;
  public size: Size;
  public icon: Icon;
  public maximized = false;


  constructor(zIndex: number, app: Application, size: Size, icon: Icon) {
    this.zIndex = zIndex;
    this.app = app;
    this.size = size;
    this.icon = icon;
  }
}
