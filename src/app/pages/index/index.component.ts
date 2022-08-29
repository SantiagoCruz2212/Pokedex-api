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

  // changeimg(src:string){
  //   src = "../../../assets/img/Pokedex-open.png";
  //   (<HTMLImageElement>document.get('pokedex'));
  // }
  ChangeImg(){
    const img = (<HTMLImageElement>document.getElementById('pokedex'));
    img.src = "../../../assets/img/Pokedex-open.png";
    img.width = 544;
    const btn = (<HTMLButtonElement>document.getElementById('open'));
    btn.hidden = true;
    const l_scr = (<HTMLImageElement>document.getElementById('left-screen'));
    l_scr.hidden = false;
    const r_scr = (<HTMLImageElement>document.getElementById('right-screen'));
    r_scr.hidden = false;
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
    number.hidden = false;
    const search = (<HTMLInputElement>document.getElementById('left-down-screen'));
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
    name.hidden = false;
    const btn_search = (<HTMLInputElement>document.getElementById('left-down-screen'));
    btn_search.hidden = false;
  }
  async ShowInfoPokemon(pokemon:string){
    const second_left_screen = (<HTMLInputElement>document.getElementById('right-down-screen'));
    second_left_screen.hidden = false;
    console.log(pokemon);
    const res:any = await axios.get("https://pokeapi.co/api/v2/pokemon-form/" + pokemon);
    console.log(res.data);

    const searched_pk = res.data;
    console.log(searched_pk.pokemon.name);
  }
}
// get, post todos me responden algo
// post me sirve para obtener pero le mando una informacion