import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ChampionShip, Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  urlBase = 'https://api.api-futebol.com.br/v1/';

  private http = inject(HttpClient);

  listChampionsShip() {
    const url = `${this.urlBase}campeonatos/`;

    return firstValueFrom(this.http.get(url));
  }

  championsShip(championShipID: number) {
    const url = `${this.urlBase}campeonatos/${championShipID}`;

    return firstValueFrom(this.http.get<ChampionShip>(url));
  }

  players(playerID: number) {
    const url = `${this.urlBase}atletas/${playerID}`;

    return firstValueFrom(this.http.get<Player>(url));
  }
}
