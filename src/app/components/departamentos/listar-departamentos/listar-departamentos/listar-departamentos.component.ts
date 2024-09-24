import { Component, OnInit } from '@angular/core';
import { Departamentos } from 'src/app/models/departamentos/departamentos';
import { DepartamentosService } from 'src/app/servicios/departamentos/departamentos.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-departamentos',
  templateUrl: './listar-departamentos.component.html',
  styleUrls: ['./listar-departamentos.component.css']
})
export class ListarDepartamentosComponent implements OnInit {

  departamentos : Departamentos[] = []; 
  page: number = 1;  // Página actual
  itemsPerPage: number = 5; // Elementos por página

  constructor(private departamentosService : DepartamentosService, private router : Router) { }

  ngOnInit(): void { 
    this.obtenerDepartamentos();
  }

  private obtenerDepartamentos() {
    this.departamentosService.obtenerListaDeDepartamentos().subscribe(dato => {
      this.departamentos = dato;
    });
  }

  actualizarDepartamento(id: number) {
    this.router.navigate(['actualizar-departamento', id]); 
  }

  detallesdepartamento(id: number) {
    this.router.navigate(['detalle-departamento', id]);
  }

  eliminarDepartamento(id: number) {
    swal({
      title: "¿Estás seguro?",
      text: "Confirma si deseas eliminar al registro",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Sí, elimínalo",
      cancelButtonText: "No, cancelar",
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.departamentosService.EliminarDepartamentos(id).subscribe(
          dato => {
            console.log(dato);
            this.obtenerDepartamentos();
            swal(
              'Registro eliminado',
              'El registro ha sido eliminado con éxito',
              'success'
            );
          },
          error => {
            console.error(error);
            swal(
              'Error',
              'No se pudo eliminar el registro. Por favor, intenta eliminar los trabajos relacionados al registro.',
              'error'
            );
          }
        );
      }
    });
  }
}
