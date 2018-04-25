import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { PokedexService } from './pokedex.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent],
})
export class AppModule { }
