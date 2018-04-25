import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public pokemon: any;
  constructor(private pokedexService: PokedexService){}
  ngOnInit(){
    this.pokedexService.getPokemon()
    .subscribe(pokemons => this.pokemon = pokemons);
    console.log(this.pokemon)
  }
}
