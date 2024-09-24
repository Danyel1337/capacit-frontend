import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamentos } from 'src/app/models/departamentos/departamentos';
@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
      // URL base para las solicitudes HTTP a la API de departamentos
  private baseURL="http://localhost:8080/api/v1/departamentos"
     
  constructor(private httpClient: HttpClient) { }
      // Realiza una solicitudes GET PUT DELETE y POSTa la URL base 
  obtenerListaDeDepartamentos():Observable<Departamentos[]>{
    return this.httpClient.get<Departamentos[]>(`${this.baseURL}`);
  }
  getDepartamentosById(id:number):Observable<Departamentos> {
    return this.httpClient.get<Departamentos>(`${this.baseURL}/buscarPorId/${id}`);
  }
  ActualizarDepartamentos(id:number, departamentos:Departamentos) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, departamentos);
  }
  EliminarDepartamentos(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);

  }   
  registrarDepartamento(departamentos:Departamentos):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, departamentos);
  }
}
