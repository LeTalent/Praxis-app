import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { Patient } from "../model/patient";

const ELEMENT_DATA: Patient[] = [
  {
    id: null,
    vorname: "Lukas",
    name: "Jaeger",
    // geburtsdatum: new Date(4/3/2020),
    telefon: 68121157051,
    email: "lukasjaeger@desto.de",
    adresse: {
      strasse: "Büsingstrasse",
      hausnummer: 32,
      plz: 85661,
      ort: "Forstinning",
    },
  },
  {
    id: null,
    vorname: "Ralph",
    name: "Dresner",
    telefon: 58638625732,
    email: "ralphdresner@gmail.com",
    // geburtsdatum: new Date(1990-2-5),
    adresse: {
      strasse: "Büsingstrasse",
      hausnummer: 32,
      plz: 85661,
      ort: "Forstinning",
    },
  },
  {
    id: null,
    vorname: "Phillipp",
    name: "Ehrlichmann",
    telefon: 381716147889,
    email: "ehrlichmannphillipp@force.hg",
    adresse: {
      strasse: "Büsingstrasse",
      hausnummer: 32,
      plz: 85661,
      ort: "Forstinning",
    },
  },
  {
    id: null,
    vorname: "Robert",
    name: "Schuster",
    telefon: 78121157051,
    email: "schusterrobert@bern.de",
    adresse: {
      strasse: "Büsingstrasse",
      hausnummer: 32,
      plz: 85661,
      ort: "Forstinning",
    },
  },
  {
    id: null,
    vorname: "Sven",
    name: "Meier",
    telefon: 48121947051,
    email: "svenmeier@zert.cm",
    adresse: {
      strasse: "Büsingstrasse",
      hausnummer: 32,
      plz: 85661,
      ort: "Forstinning",
    },
  },
  {
    id: null,
    vorname: "Rene",
    name: "Werner",
    telefon: 68121157051,
    email: "renewerner@abt.fr",
    adresse: {
      strasse: "Büsingstrasse",
      hausnummer: 32,
      plz: 85661,
      ort: "Forstinning",
    },
  },
  {
    id: null,
    vorname: "Patrick",
    name: "Pfeiffer",
    telefon: 78654793040,
    email: "pfeifferpatrick@saturn.com",
    adresse: {
      strasse: "Langenhorner Chaussee",
      hausnummer: 86,
      plz: 83381,
      ort: "Freilassing",
    },
  },
  {
    id: null,
    vorname: "Marcel",
    name: "Frueh",
    telefon: 73932871861,
    email: "fruehmarcel@gmail.de",
    adresse: {
      strasse: "Feldstrasse",
      hausnummer: 8,
      plz: 76642,
      ort: "Allerstedt",
    },
  },
  {
    id: null,
    vorname: "Benjamin",
    name: "Abt",
    telefon: 17665626362,
    email: "benjaminAbt@teleworm.us",
    adresse: {
      strasse: "Schönhauser Allee",
      hausnummer: 2,
      plz: 79224,
      ort: "Umkirch",
    },
  },
  {
    id: null,
    vorname: "Tim",
    name: "Nussbaum",
    telefon: 1941401609,
    email: "timnussbaum@gmail.com",
    adresse: {
      strasse: "Mühlenstrasse",
      hausnummer: 97,
      plz: 93002,
      ort: "Regensburg",
    },
  },
];

@Component({
  selector: "app-patienten-list",
  templateUrl: "./patienten-list.component.html",
  styleUrls: ["./patienten-list.component.scss"],
})
export class PatientenListComponent implements OnInit {
  searchForm: FormGroup;
  displayedColumns: string[] = [
    "_vorname",
    "_name",
    "_email",
    "_telefon",
    "_adresse",
    "_actions"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {}

  ngOnInit() {
    this.searchFormInitializer();
  }

  searchFormInitializer() {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl(""),
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSearch() {}
}
