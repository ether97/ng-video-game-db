import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from './../httpservice.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from '../models';
import { APIResponse } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public sort: string = '';
  public games: Array<Game> = [];
  constructor(
    private httpService: HttpserviceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['title']) {
        this.searchGames('metacrit', params['title']);
      } else {
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string, search?: string) {
    this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }
}
