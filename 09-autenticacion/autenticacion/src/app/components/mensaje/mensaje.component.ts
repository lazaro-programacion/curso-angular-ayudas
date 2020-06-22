import { Component, OnInit } from '@angular/core';
import { MensajeService } from 'src/app/service/mensaje.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  public mensaje = "";
  constructor(private mensajeService: MensajeService) { }

  ngOnInit(): void {
    this.mensajeService.getMensaje()
    .toPromise().then(  res => {
      this.mensaje = res.mensaje;
    }).catch()
  }

}
