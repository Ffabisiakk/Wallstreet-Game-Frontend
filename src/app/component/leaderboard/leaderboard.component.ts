import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  leaderboard: Map<string, number>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.setLeaderBoard();
  }

  setLeaderBoard(): void {
    this.userService.getLeaderboard().subscribe(map => this.leaderboard = map);
  }

  asIsOrder(a, b) {
    return 0;
  }
}
