import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { Departamentos } from 'src/app/models/departamentos/departamentos';
import { DepartamentosService } from 'src/app/servicios/departamentos/departamentos.service';

@Component({
  selector: 'app-actualizar-departamentos',
  templateUrl: './actualizar-departamentos.component.html',
  styleUrls: ['./actualizar-departamentos.component.css']
})
export class ActualizarDepartamentosComponent implements OnInit {

  departamentos : Departamentos = new Departamentos();
  constructor(private departamentosService:DepartamentosService, private router:Router, private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDepartamentosById(this.rutaActiva.snapshot.params.id);
  }

  private getDepartamentosById(id:number){
    this.departamentosService.getDepartamentosById(id).subscribe(dato=>{
      this.departamentos = dato;
      console.log(this.departamentos.departamento); 
    })
  }

  irListaDepartamentos(){
    this.router.navigate(['/lista-departamentos']);
  }

  actualizarDepartamentos(){
    this.departamentosService.ActualizarDepartamentos(this.departamentos.id,this.departamentos).subscribe(dato =>{
      console.log(dato);
      this.irListaDepartamentos();
    },error=>console.log(error));
  }

  onSubmit(){
    this.actualizarDepartamentos();
  }

}
