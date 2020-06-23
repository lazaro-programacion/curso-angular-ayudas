import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';
  public visible = true;

  cambiaTitulo = () => {
    this.title="otro titulo";
  }

  toggleVisible = () => {
    this.visible = ! this.visible;
  }
}
