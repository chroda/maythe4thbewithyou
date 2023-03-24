import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"],
})
export class SiteComponent implements OnInit {
  dataset: any = [];

  constructor(private HttpClient: HttpClient) {}

  onKeyUp(value) {
    this.HttpClient.get(
      `https://swapi.dev/api/people/?search=${value}`
    ).subscribe((data: any) => {
      if (data) {
        this.dataset = data.results;
      }
    });
  }

  ngOnInit() {}
}
