import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Turn_Pokedex(){
    const pokedex_closed = (<HTMLImageElement>document.getElementById('pokedex-closed'));
    pokedex_closed.hidden = true;
    const btn_open = (<HTMLButtonElement>document.getElementById('press'));
    btn_open.hidden = true;
    const cntr_pokedex = (<HTMLDivElement>document.getElementById('cntr-pokedex-open'));
    cntr_pokedex.className = "cntr-pokedex-open rotate-pokedex";
    setTimeout(() =>{
      this.Open_Pokedex();
    }, 2000);
  }
  Open_Pokedex(){
    const cntr_pokedex = (<HTMLDivElement>document.getElementById('cntr-pokedex-open'));
    cntr_pokedex.className = "cntr-pokedex-open rotate-pokedex open-pokedex";
    setTimeout(() =>{
      this.Screen_On();
    }, 2000);
  }
  Screen_On(){
    const cntr_text = (<HTMLDivElement>document.getElementById('cntr-text'));
    cntr_text.hidden = false;
  }
}
