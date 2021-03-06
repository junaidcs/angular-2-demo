import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [GithubService]
})
export class UserComponent implements OnInit {

  public user;

  constructor(private githubService: GithubService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const { userId } = this.activatedRoute.snapshot.params;
    this.githubService.getUserDetails(userId).subscribe(
      res => {
        console.log('res', res);
        this.user = res;
      }
    )
  }

}
