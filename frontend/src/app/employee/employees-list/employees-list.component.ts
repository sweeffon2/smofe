import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatButton } from "@angular/material/button";
import { EmployeesService } from "app/backend/employees.service";
import { Employee } from "app/backend/models/Employee";
import { BehaviorSubject, debounceTime, tap } from "rxjs";
import { EmployeeDataSource } from "./services/EmployeeDataSource";
import { EmployeeInformationComponent } from "../employee-information/employee-information.component";

@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class EmployeesListComponent implements OnInit, AfterViewInit {

  searchSubject: BehaviorSubject<string> = new BehaviorSubject(""); 
  searchValue: string = "";

  valueChanged($event: any) {
    console.log("search value is = ", $event.target.value);
    this.searchSubject.next($event.target.value) ;
  }  
  employeesDataSource: EmployeeDataSource;
  displayedColumns: any = ["badgenumber", "name", "title"];
  displayedColumnsWithExpand = [...this.displayedColumns, "expand"];
  expandedElement: Employee | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private emplService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesDataSource = new EmployeeDataSource(this.emplService);
    this.employeesDataSource.loadData();
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        debounceTime(300),
        tap(() => this.loadEmployeesPage())
      )
      .subscribe();

     this.searchSubject.pipe(
      debounceTime(300),
      tap(()=> this.paginator.pageIndex = 0),
      tap((v)=> this.searchValue = v),
      tap(() => this.loadEmployeesPage())
     )
     .subscribe(); 
  }

  loadEmployeesPage(): void {
    
    this.employeesDataSource.loadData(
      this.searchValue,
      "",
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }
}
