import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public pokemonList: any;
  constructor(private pokedexService: PokedexService){}

  ngOnInit(){
    this.pokedexService.getPokemon()
      .subscribe(pokemon => {
        console.log(pokemon.objects[3].pokemon);
        this.pokemonList = pokemon.objects[3].pokemon.name;
      });
    // .subscribe(pokemon => console.log(pokemon));


  }
}
