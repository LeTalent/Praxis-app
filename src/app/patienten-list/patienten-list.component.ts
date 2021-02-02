import { DataSource } from "@angular/cdk/table";
import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";
import { Patient } from "../model/patient";
import { PatientenService } from "../patienten.service";


@Component({
  selector: "app-patienten-list",
  templateUrl: "./patienten-list.component.html",
  styleUrls: ["./patienten-list.component.scss"],
})
export class PatientenListComponent implements OnInit, OnDestroy {
   ELEMENT_DATA: Patient[] = []
  searchForm: FormGroup;
  displayedColumns: string[] = [ "_vorname", "_name", "_email", "_telefon", "_adresse", "_actions" ];
  dataSubs: Subscription;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private patientService: PatientenService) {}

  ngOnInit() {

    this.dataSubs = this.patientService.getPatienten().subscribe(
      res => this.ELEMENT_DATA = res
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.dataSubs.unsubscribe();
  }

  OnDelete(patientId: string){
    this.patientService.deletePost(patientId)
  }
}
