import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8098/api/ingeniero';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {



  constructor(private http: HttpClient) { }

  generar(cedula: any): Observable<any> {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        // 'Content-Disposition': 'attachment;filename=certif.pdf',
      })
    };
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/pdf',
    //     'Content-Disposition': 'attachment;filename=certif.pdf',
    //   })
    // };

    return this.http.get(`${baseUrl}/${cedula}`);
  } 
}
