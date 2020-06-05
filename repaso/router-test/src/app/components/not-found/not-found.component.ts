import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  public page: string;

  constructor(public route: ActivatedRoute) {
    this.page = route.snapshot.paramMap.get("page");
  }

  ngOnInit(): void {
  }

}
