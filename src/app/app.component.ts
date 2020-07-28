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
  title = "SocialPost";

  users: Array<any>;
  images: Array<any>;
array: []

  post: Array<any>;

  // title = "challenge-socialPost-front";

  constructor(private ApiGoRestService: ApiGoRestService) {}

  ngOnInit() {
    this.getReturnUsers();
    // this.getReturnPosts();
  }

  getReturnUsers() {
    var array = [];

    this.ApiGoRestService.getReturnUsers().subscribe((response) => {
      this.users = response.result;
      console.log("users", this.users);

      this.users.map((imagens) => {

        this.images = Object.values(imagens._links.avatar.href)
      console.log(this.images )



      });
    });
  }
  // getReturnPosts() {

  //    this.ApiGoRestService.getReturnPostsUsers().subscribe((response) => {
  //     var objResult = response.result;

  //     objResult.map((values) => {
  //     console.log('posts', values)

  //   });
  // })
  // }
}
