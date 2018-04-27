import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokedexService {

  constructor( private http: HttpClient) { }

  getPokemon(){
    return this.http.get('http://pokeapi.salestock.net/api/v1/');


  }


}
