import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const music = (<HTMLAudioElement>document.getElementById('song'));
      music.loop = true;
      music.volume = 0.1;
  }

}
