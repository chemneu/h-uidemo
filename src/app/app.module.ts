import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './desktop/icon/icon.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChatComponent } from './desktop/chat/chat.component';
import { WindowHeaderComponent } from './desktop/window-header/window-header.component';
import { ExplorerComponent } from './desktop/explorer/explorer.component';
import { MailComponent } from './desktop/mail/mail.component';
import { EditorComponent } from './desktop/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    ChatComponent,
    WindowHeaderComponent,
    ExplorerComponent,
    MailComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
