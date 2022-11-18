import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApigamesService } from 'src/app/serivices/apigames.service';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.css']
})
export class EditgameComponent implements OnInit {
  formularioGames!:FormGroup;
  idseleccionado!: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private apiGames: ApigamesService,
    public formulario: FormBuilder,
    private ruteado:Router
    
  ) { 
    this.idseleccionado=this.activeRoute.snapshot.paramMap.get('id');
    this.apiGames.obtenerDonde(this.idseleccionado).subscribe(
      (data) => {
        console.log(data);
        this.formularioGames.setValue({

          nombre:data[0]['nombre'],
          descripcion:data[0]['descripcion'],
          precio:data[0]['precio'],
          image:data[0]['image'],

        })
      });
    this.formularioGames=this.formulario.group({
      nombre: [''],
      descripcion: [''],
      precio: [''],
      image: [''],
    });
  }

  ngOnInit(): void {
  }
  enviar():any{
    this.apiGames.editar(this.idseleccionado,this.formularioGames.value).subscribe(
      (data) => {
        this.ruteado.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
