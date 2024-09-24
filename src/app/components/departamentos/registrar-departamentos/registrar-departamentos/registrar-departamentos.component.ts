import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { Departamentos } from 'src/app/models/departamentos/departamentos';
import { DepartamentosService } from 'src/app/servicios/departamentos/departamentos.service';

@Component({
  selector: 'app-registrar-departamentos',
  templateUrl: './registrar-departamentos.component.html',
  styleUrls: ['./registrar-departamentos.component.css']
})
export class RegistrarDepartamentosComponent implements OnInit {

  departamentos : Departamentos = new Departamentos();
  constructor(private departamentosServicio:DepartamentosService,private router:Router) { }

  ngOnInit(): void { }

  guardarDepartamento() {
    this.departamentosServicio.registrarDepartamento(this.departamentos).subscribe(dato => {
      console.log(dato);    
      this.irALaListaDeDepartamentos();
  }, error => console.log(error));
  }

  irALaListaDeDepartamentos() {
    this.router.navigate(['/lista-departamentos']);
  }
 
  onSubmit() {
    this.guardarDepartamento();
  }

}
