import { Component, OnInit } from "@angular/core";

import { ApiGoRestService } from "../../src/services/api-go-rest.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "challenge-socialPost-front";

  constructor(private ApiGoRestService: ApiGoRestService) {}

  ngOnInit() {
    this.getReturnUsers();
    this.getReturnPosts();
  }

  getReturnUsers() {
    return this.ApiGoRestService.getReturnUsers().subscribe((response) => {
      console.log("Usuarios ", response);
    });
  }
  getReturnPosts() {
    return this.ApiGoRestService.getReturnPostsUsers().subscribe((response) => {
      console.log("Posts", response);
    });
  }
}
