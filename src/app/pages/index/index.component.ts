import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  ChangeImg(){
    const img = (<HTMLImageElement>document.getElementById('pokedex'));
    img.src = "../../../assets/img/Pokedex-open.png";
    img.width = 544;
    const btn = (<HTMLButtonElement>document.getElementById('open'));
    btn.hidden = true;
    const search = (<HTMLInputElement>document.getElementById('ctnr-search'));
    search.hidden = false;
  }
  ChangeStateName(){
    const number_text = (<HTMLInputElement>document.getElementById('number-text'));
    number_text.hidden = true;
    const number = (<HTMLInputElement>document.getElementById('number-pk'));
    number.hidden = true;
    number.value = "";
    const name_text = (<HTMLInputElement>document.getElementById('name-text'));
    name_text.hidden = false;
    const name = (<HTMLInputElement>document.getElementById('name-pk'));
    name.value = "";
    name.hidden = false;
    const btn_search = (<HTMLInputElement>document.getElementById('ctnr-btn-search'));
    btn_search.hidden = false;
  }
  ChangeStateNumber(){
    const name_text = (<HTMLInputElement>document.getElementById('name-text'));
    name_text.hidden = true;
    const name = (<HTMLInputElement>document.getElementById('name-pk'));
    name.hidden = true;
    name.value = "";

    const number_text = (<HTMLInputElement>document.getElementById('number-text'));
    number_text.hidden = false;
    const number = (<HTMLInputElement>document.getElementById('number-pk'));
    number.value = "";
    number.hidden = false;
    const btn_search = (<HTMLInputElement>document.getElementById('ctnr-btn-search'));
    btn_search.hidden = false;
  }
  async ShowInfoPokemon(pokemon:string){
    const search = (<HTMLInputElement>document.getElementById('ctnr-search'));
    search.hidden = true;
    const btn_search = (<HTMLInputElement>document.getElementById('ctnr-btn-search'));
    btn_search.hidden = true;

    const info_pk:any = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon);
    const searched_pk = info_pk.data;
    const l_scr = (<HTMLImageElement>document.getElementById('left-screen'));
    l_scr.hidden = false;
    const name_pk = (<HTMLInputElement>document.getElementById('tittle-name-pk'));
    name_pk.innerHTML = searched_pk.forms[0].name;
    const photo_pk = (<HTMLImageElement>document.getElementById('photo-pk'));
    photo_pk.src =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + searched_pk.id + ".gif";

    const send_info_pk = (<HTMLInputElement>document.getElementById('info-pk'));
    send_info_pk.innerHTML ="name: " + searched_pk.forms[0].name + "<br>id: " + searched_pk.id + "<br>type: " + searched_pk.types[0].type.name + "<br>weight: " + searched_pk.weight + "kg<br>height: " + searched_pk.height + "cm";
    send_info_pk.hidden = false;
  }
}