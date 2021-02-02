import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {
  isLoading = false;
  myForm: FormGroup;


  constructor(private fb: FormBuilder) { }

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

  onSavePatient(){}

}
