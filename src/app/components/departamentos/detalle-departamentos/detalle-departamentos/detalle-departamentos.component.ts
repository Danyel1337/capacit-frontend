import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Departamentos } from 'src/app/models/departamentos/departamentos';
import { DepartamentosService } from 'src/app/servicios/departamentos/departamentos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-departamentos',
  templateUrl: './detalle-departamentos.component.html',
  styleUrls: ['./detalle-departamentos.component.css']
})
export class DetalleDepartamentosComponent implements OnInit {

  id:number; 
  departamentos : Departamentos;

  constructor(private route:ActivatedRoute, private departamentosService: DepartamentosService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.departamentos = new Departamentos()
    this.departamentosService.getDepartamentosById(this.id).subscribe(dato=>{
      this.departamentos = dato;
      swal(`Detalles del Registro ${this.departamentos.departamento}`);
    })
  }

}
