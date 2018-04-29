import { Component, OnInit } from '@angular/core';
import {FollowService} from '../_services/follow.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  private users: any;
  private newFollow: any;
  private newUnfollow: any;
  private follows: any;
  private arrayFollows = {'username': []};
  private followsPosts: any;

  constructor(private followService: FollowService) { }

  ngOnInit() {
    this.read();
    this.readFollows();
  }

  // read all users

  read(): void {
    this.followService.readUsers()
      .subscribe(
        (data) => {
          console.log('Succeeded to subscribe readUser');
          this.users = data;
        },
        error => {
          console.log('Failed to subscribe readUser');
          console.log(error);
        }
      );
  }

  // Follow new user

  follow(Follow): void {
    this.newFollow = { follow: Follow };
    this.followService.followUser(this.newFollow)
      .subscribe(
        () => {
          console.log('Succeeded to subscribe followUser');
          this.readFollows();
        },
        error => {
          console.log('Failed to subscribe followUser');
          console.log(error);
        }
      );
  }

  // Unfollow user

  unfollow(Unfollow): void {
    this.newUnfollow = { follow: Unfollow };
    this.followService.unfollowUser(this.newUnfollow)
      .subscribe(
        () => {
          console.log('Succeeded to subscribe unfollowUser');
          this.readFollows();
          this.arrayFollows = {'username': []};
          this.readFollowsPosts();
        },
        error => {
          console.log('Failed to subscribe unfollowUser');
          console.log(error);
        }
      );
  }

  // Read follows

  readFollows(): void {
    this.followService.readFollows()
      .subscribe(
        (data) => {
          for (let i = 0; data[i] ; i++) {
            this.arrayFollows.username.push(data[i].follow);
          }
          console.log('Succeeded to subscribe readFollows');
          this.follows = data;
          this.readFollowsPosts();
        },
        error => {
          console.log('Failed to subscribe readFollows');
          console.log(error);
        }
      );
    }

    // Read follows' posts

  readFollowsPosts(): void {
    this.followService.readFollowsPosts(this.arrayFollows)
      .subscribe(
        (data) => {
          this.followsPosts = data;
        },
        error => {
          console.log('Failed to subscribe readFollowsPosts');
          console.log(error);
        }
      );
  }
}
