import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-back-page',
  templateUrl: './back-page.component.html',
  styleUrls: ['./back-page.component.css']
})
export class BackPageComponent implements OnInit {

  public id: string = null;

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
