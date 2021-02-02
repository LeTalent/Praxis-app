import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormGroupName, Validators } from '@angular/forms';
import { PatientenService } from '../patienten.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {
  isLoading = false;
  myForm: FormGroup;
  private mode = "create";
  private patientId: string;


  constructor(private fb: FormBuilder, private patientServ: PatientenService) { }

  ngOnInit() {

      this.myForm = new FormGroup({
        vorname: new FormControl('', {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        name: new FormControl('', {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        date: new FormControl(''),
        fone: new FormControl(''),
        email: new FormControl(''),
        adresse: new FormGroup({
          strasse: new FormControl(''),
          hausnummer: new FormControl(''),
          plz: new FormControl(''),
          ort: new FormControl('')
        })
      })
  }

  onSavePatient(){
    if (this.myForm.invalid) {
      return;
    }
    if (this.mode === "create") {
      this.patientServ.addPatient(
        this.myForm.value.vorname,
        this.myForm.value.name,
        this.myForm.value.date,
        this.myForm.value.fone,
        this.myForm.value.email,
        this.myForm.value.adresse
      );
    } else {
      this.patientServ.updatePatient(
        this.patientId,
        this.myForm.value.vorname,
        this.myForm.value.name,
        this.myForm.value.date,
        this.myForm.value.fone,
        this.myForm.value.email,
        this.myForm.value.adresse
      );
    }
    this.myForm.reset();
  }

}
