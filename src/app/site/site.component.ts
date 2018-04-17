import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"]
})
export class SiteComponent implements OnInit {

  dataset = '';

  constructor(private HttpClient: HttpClient) {}

  onKeyUp(value) {
    this.HttpClient.get(`https://swapi.co/api/people/?search=${value}`).subscribe(
    data => {
      if (data.count > 0) {
        this.dataset = data.results;
        console.log(this.dataset);
      }
    });
  }

  ngOnInit() {}
}
