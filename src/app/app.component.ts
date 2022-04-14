import {Component, OnInit} from '@angular/core';
import {Icon} from './data/icon';
import {Size} from './data/size';
import {Position} from './data/position';
import {Application} from './data/application';
import {AppWindow} from './data/appWindow';
import {GameEngine} from './game-engine';
import {PagelEvent} from './data/pagel-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PAGEL Simulation';

  private standardIconWidth = 100;
  private standardIconHeight = 80;

  private standardWindowWidth = 600;
  private standardWindowHeight = 540;

  icons: Icon[] = [];
  appWindows: AppWindow[] = [];
  Application = Application;

  homeOpen = false;

  constructor(private engine: GameEngine) {
  }

  ngOnInit(): void {
    // init icons
    this.icons.push(new Icon(new Position(0, 0), this.getIconStandardSize(), 'mail', 'E-Mail', Application.mail));
    this.icons.push(new Icon(new Position(0, 100), this.getIconStandardSize(), 'chat', 'Chat', Application.chat));
    this.icons.push(new Icon(new Position(0, 200), this.getIconStandardSize(), 'editor', 'Editor', Application.editor));
    this.icons.push(new Icon(new Position(0, 300), this.getIconStandardSize(), 'explorer', 'Bibliothek', Application.explorer));
    this.icons.push(new Icon(new Position(0, 400), this.getIconStandardSize(), 'products', 'Bibliothek', Application.products));
  }

  private getIconStandardSize(): Size {
    return new Size(this.standardIconHeight, this.standardIconWidth);
  }

  private getWindowStandardSize(): Size {
    return new Size(this.standardWindowHeight, this.standardWindowWidth);
  }

  get screenSize(): Size {
    const height = document.getElementById('desktop_content').getBoundingClientRect().height;
    const width = document.getElementById('desktop_content').getBoundingClientRect().width;

    return new Size(height, width);
  }

  public getApplicationWindow(application: Application): AppWindow {
    const app = this.appWindows.filter(a => a.app === application);
    if (app.length === 0) {
      return null;
    }
    return app[0];
  }

  public getApplicationWindowZIndex(application: Application): number {
    const app = this.getApplicationWindow(application);
    return app.zIndex;
  }

  public getApplicationWindowWidth(application: Application): number {
    const app = this.getApplicationWindow(application);
    if (app.maximized) {
      return this.screenSize.width;
    }
    return app.size.width;
  }

  public getApplicationWindowHeight(application: Application): number {
    const app = this.getApplicationWindow(application);
    if (app.maximized) {
      return this.screenSize.height;
    }
    return app.size.height;
  }

  public startApplication(i: Icon): void {
    if (!this.getApplicationWindow(i.application)) {
      this.appWindows.push(new AppWindow(10, i.application, this.getWindowStandardSize(), i));
    }
    this.focusApplication(i.application);
  }

  public stopApplication(application: Application): void {
    this.appWindows = this.appWindows.filter(a => a.app !== application);
  }

  public maximizeApplication(application: Application): void {
    this.getApplicationWindow(application).maximized = !this.getApplicationWindow(application).maximized;
  }

  public minimizeApplication(application: Application): void {
    this.getApplicationWindow(application).zIndex = -1;
  }

  public focusApplication(application: Application): void {
    const app = this.getApplicationWindow(application);
    this.appWindows.forEach(a => {
      if (a.zIndex > 0) {
        a.zIndex = a.zIndex - 1;
      }
    });
    app.zIndex = 10;
  }


  // *********** DESKTOP FUNCTIONS************************

  get background(): string {
    return 'url(\'assets/backgrounds/windows10.jpg\')';
  }

  get lang(): string {
    return 'DE';
  }

  getNow(): number {
    return Date.now();
  }

  get timeformat(): string {
    return 'hh:mm';
  }

  get dateformat(): string {
    return 'dd.MM.yyyy';
  }

  getNewEvent(): PagelEvent {
    return this.engine.getNewEvent();
  }
}


