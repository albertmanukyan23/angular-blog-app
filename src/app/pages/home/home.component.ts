import {Component} from '@angular/core';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  featuredPostsArray: Array<any> = [];
  latestPostArray: Array<any> = [];


  constructor(private postService: PostService) {
    this.postService.loadData().subscribe(val => {
      this.featuredPostsArray = val;
    })
    this.postService.loadLatest().subscribe(val => {
      this.latestPostArray = val;
    })
  }

}
