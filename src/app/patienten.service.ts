import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { environment } from '../environments/environment';
import { Adresse, Patient } from "./model/patient";

const BACKEND_URL = environment.apiUrl +'/posts/';
@Injectable({
  providedIn: 'root'
})
export class PatientenService {
  private patient: Patient;


  constructor( private http: HttpClient, private router: Router ) { }

  getPatienten() {
    return this.http.get<Patient[]>(BACKEND_URL);
  }

  getPatient(id: string) {
    return this.http.get<{
      _id: string,
      vorname: string,
      name: string,
      geburtsdatum: Date,
      telefon: number,
      email: string,
      adresse: Adresse
    }>(BACKEND_URL  + id);
  }

  addPatient(vorname: string, name: string, geburtsdatum: Date, telefon: number, email: string, adresse: Adresse) {
    const patientData = new FormData();
    patientData.append("vorname", vorname);
    patientData.append("name", name);
    patientData.append("geburtsdatum", JSON.stringify(geburtsdatum));
    patientData.append("telefon", JSON.stringify(telefon));
    patientData.append("email", email);
    patientData.append("adresse", JSON.stringify(adresse));
    this.http
      .post<{ message: string; patient: Patient }>( BACKEND_URL ,patientData )
      .subscribe(responseData => {
        this.router.navigate(["/"]);
      });
  }

  updatePatient(id: string, vorname: string, name: string, geburtsdatum: Date, telefon: number, email: string, adresse: Adresse) {
    let patientData: Patient
      patientData = {
      id: id,
      vorname: vorname,
      name: name,
      geburtsdatum: geburtsdatum,
      telefon: telefon,
      email: email,
      adresse: adresse
      };
    this.http
      .put(BACKEND_URL + id, patientData)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }

  deletePost(patientId: string) {
    return this.http.delete(BACKEND_URL + patientId);
  }

}
