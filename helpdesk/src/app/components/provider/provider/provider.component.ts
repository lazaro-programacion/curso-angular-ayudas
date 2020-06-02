import { Component, OnInit } from '@angular/core';
import { Provider } from '../../../model/provider';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  public provider: Provider;

  constructor() { }

  ngOnInit(): void {
    this.provider = new Provider(
      'pepe',
      'Ruiz',
      '55606432J',
      'https://www.pedrohermosilla.com/media/com_mtree/images/listings/o/636.jpg',
      5
    );
  }

}
