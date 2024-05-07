import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Details, PokeResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/';

  _http = inject(HttpClient);

  getPokemonList(offset = 0) {
    const url = `${this.baseUrl}pokemon?offset=${offset}`;
    return firstValueFrom(this._http.get<PokeResponse>(url));
  }

  getPokemonDetails(url: string) {
    return firstValueFrom(this._http.get<Details>(url));
  }
}
