import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApigamesService } from 'src/app/serivices/apigames.service';
import { Game } from 'src/app/serivices/game';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {
  formularioAgregar!: FormGroup;
  
  constructor(public formulario:FormBuilder, private apigamesService:ApigamesService, private router:Router) {
      this.formularioAgregar = this.formulario.group({
        nombre: [''],
        descripcion: [''],
        precio: [''],
        image: ['']
      })

   }

  ngOnInit(): void {
  }
  agregar():any{
    console.log (this.formularioAgregar.value);
    this.apigamesService.agregar(this.formularioAgregar.value).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['/dashboard']);
    })

  }

}
