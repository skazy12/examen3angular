import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/serivices/game';
import { ApigamesService } from '../../serivices/apigames.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listajuegos:any = [];



  constructor(private apiGames: ApigamesService) {
    this.cargarJuegos();
   }

  ngOnInit(): void {
    
  }
  cargarJuegos(){
    this.apiGames.obtenerJuegos().subscribe(
      (data) => {
        this.listajuegos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }


    )
  }

}
