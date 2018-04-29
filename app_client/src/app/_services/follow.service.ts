import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';

@Injectable()
export class FollowService {

  private membersReadAllUrl = appConfig.apiUrl + '/follow';
  private followUserUrl = appConfig.apiUrl + '/follow/' + localStorage.getItem('username');
  private unfollowUserUrl = appConfig.apiUrl + '/unfollow/' + localStorage.getItem('username');
  private readFollowsUrl = appConfig.apiUrl + '/follow/' + localStorage.getItem('username');
  private readFollowsPostsUrl = appConfig.apiUrl + '/follow/read/follows';

  constructor(private http: HttpClient) { }

  readUsers() {
    return this.http.get(this.membersReadAllUrl);
  }

  followUser(follow) {
    return this.http.post(this.followUserUrl, follow);
  }

  unfollowUser(unfollow) {
    return this.http.post(this.unfollowUserUrl, unfollow);
  }

  readFollows() {
    return this.http.get(this.readFollowsUrl);
  }

  readFollowsPosts(arrayFollows) {
    return this.http.post(this.readFollowsPostsUrl, arrayFollows);
  }
}
