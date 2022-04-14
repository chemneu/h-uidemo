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
import { ProductsComponent } from './desktop/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {GameEngine} from './game-engine';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    ChatComponent,
    WindowHeaderComponent,
    ExplorerComponent,
    MailComponent,
    EditorComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [
    GameEngine
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
