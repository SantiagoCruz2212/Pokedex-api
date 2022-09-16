import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Change_Pokedex(){
    const pokedex_closed = (<HTMLImageElement>document.getElementById('pokedex-closed'));
    pokedex_closed.hidden = true;
    const btn_open = (<HTMLButtonElement>document.getElementById('press'));
    btn_open.hidden = true;
    const cntr_pokedex_opened = (<HTMLDivElement>document.getElementById('cntr-pokedex-opened'));
    cntr_pokedex_opened.hidden = false;
    setTimeout(() =>{
      this.Turn_Pokedex();
    }, 2000);
  }
  Turn_Pokedex(){
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
  ShowInputName(){
    const id_pokemon = (<HTMLInputElement>document.getElementById('id_pokemon'))
    id_pokemon.hidden = true;
    id_pokemon.value = "";
    const btn_search = (<HTMLInputElement>document.getElementById('btn-search'));
    btn_search.hidden = false;
    
    const name_pokemon = (<HTMLInputElement>document.getElementById('name_pokemon'))
    name_pokemon.hidden = false;
  }
  ShowInputNumber(){
    const name_pokemon = (<HTMLInputElement>document.getElementById('name_pokemon'))
    name_pokemon.hidden = true;
    name_pokemon.value = "";
    const btn_search = (<HTMLInputElement>document.getElementById('btn-search'));
    btn_search.hidden = false;

    const id_pokemon = (<HTMLInputElement>document.getElementById('id_pokemon'))
    id_pokemon.hidden = false;
  }
  async ShowInfoPokemon(pokemon:string){
    const catch_pokemon:any = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon);
    const searched_pk = catch_pokemon.data;

    const search = (<HTMLInputElement>document.getElementById('search'));
    search.hidden = true;
    const id_pokemon = (<HTMLInputElement>document.getElementById('id_pokemon'))
    id_pokemon.hidden = true;
    const name_pokemon = (<HTMLInputElement>document.getElementById('name_pokemon'))
    name_pokemon.hidden = true;

    const info_pokemon = (<HTMLDivElement>document.getElementById('info-pokemon'));
    info_pokemon.hidden = false;
    const name_pk = (<HTMLInputElement>document.getElementById('tittle-name-pk'));
    name_pk.innerHTML = searched_pk.forms[0].name;
    
    const pokemon_photo = (<HTMLImageElement>document.getElementById('pokemon-photo'));
    pokemon_photo.src =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + searched_pk.id + ".gif";

    const send_info_pk = (<HTMLInputElement>document.getElementById('info-pk'));
    send_info_pk.innerHTML ="name: " + searched_pk.forms[0].name + "<br>id: " + searched_pk.id + "<br>type: " + searched_pk.types[0].type.name + "<br>weight: " + searched_pk.weight + "kg<br>height: " + searched_pk.height + "cm";
    send_info_pk.hidden = false;
  }
}
