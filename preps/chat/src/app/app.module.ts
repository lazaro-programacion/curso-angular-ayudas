import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';

const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
