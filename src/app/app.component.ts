import { map } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";

import { ApiGoRestService } from "../../src/services/api-go-rest.service";
import { ValueTransformer } from "@angular/compiler/src/util";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  usersArray: [];

  return: any

  title = "challenge-socialPost-front";

  constructor(private ApiGoRestService: ApiGoRestService) {}

  ngOnInit() {
    this.getReturnUsers(7676);
    this.getReturnPosts();
  }

  getReturnUsers(id) {
    var array = [];

    this.ApiGoRestService.getReturnUsers(id).subscribe((response) => {
      var objResult = response.result;
      console.log(objResult)

      // objResult.map((values) => {
      //   // return values;

      //   console.log('users', values)

      // });
    });
  }
  getReturnPosts() {

     this.ApiGoRestService.getReturnPostsUsers().subscribe((response) => {
      var objResult = response.result;

      objResult.map((values) => {
      console.log('posts', values)

    });
  })
  }
}
