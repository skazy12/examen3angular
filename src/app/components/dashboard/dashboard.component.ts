import { Component, OnInit } from '@angular/core';
import { ApigamesService } from 'src/app/serivices/apigames.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listajuegos:any = [];

  constructor(private apigamesService: ApigamesService) {
    this.cargarJuegos();
   }

  ngOnInit(): void {
  }

  cargarJuegos(){
    this.apigamesService.obtenerJuegos().subscribe(
      (data) => {
        this.listajuegos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  eliminar(id: any, iControl: any){
    this.apigamesService.eliminar(id).subscribe(
      (data) => {
        this.cargarJuegos();
      },
      (error) => {
        console.log(error);
      }
    )
  }


}
