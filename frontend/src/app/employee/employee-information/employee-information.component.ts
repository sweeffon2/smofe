import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { CheckinProviderService } from "app/backend/checkin-provider.service";
import { AttendenceResponse, CheckInOut, Synthese } from "app/backend/models/Attendance";
import { Employee } from "app/backend/models/Employee";
import * as moment from "moment";
import { catchError, finalize, of } from "rxjs";
import { EmployeeChartService } from "../employee-chart.service";
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: "app-employee-information",
  templateUrl: "./employee-information.component.html",
  styleUrls: ["./employee-information.component.css"],
})
export class EmployeeInformationComponent implements OnInit, AfterViewInit {

  mois(n: number) {
    console.log("trying to update");
    this.range.patchValue({start:null, end:null})
    var lastDay = moment (new Date()) ;
    var firstDay = moment (new Date()).subtract(n, 'M') ;
    this.range.patchValue({start:firstDay.toDate(), end:lastDay.toDate()})
    console.log("updated", this.range);
  }

  moisComptable() {
    console.log("trying to update");
    this.range.patchValue({start:null, end:null})
    var lastDay = moment (new Date()).set('D', 20) ;
    var firstDay = moment (new Date()).set('D', 21).subtract(1, 'M') ;
    // this._from = firstDay.toDate () ; 
    // this._to = lastDay.toDate () ; 
    this.range.patchValue({start:firstDay.toDate(), end:lastDay.toDate()})
    console.log("updated", this.range);
  }

  @Input() employee: Employee;
  oldEmployee: Employee;
  showAttendence: boolean = false;
  employeeAttendence: CheckInOut[] = [];
  _to:Date = new Date();
  _from:Date = moment(this._to).subtract(2, "month").toDate();

  _synthese: Synthese = { presencees:[], ouvrable: [], retards: []}


  @ViewChild("myCanvas")
  myCanvas: ElementRef<HTMLCanvasElement>;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(
    private chartService: EmployeeChartService,
    private attendenceService: CheckinProviderService
  ) {}

  ngAfterViewInit(): void {
//    this.loadCharts();
    console.log("AfterLoad  ");
    console.log("employee", this.employee);
    console.log("canva", this.myCanvas);
    this.range.valueChanges.subscribe ( 
      () => {
        console.log("The value is changed to ", this.range.value);
        this.loadCharts() ;
      });
    
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.employee != null) {
      if (this.oldEmployee !== this.employee) {
        this.oldEmployee = this.employee;
//        console.log("employee changed : ", this.employee);

        // console.log("AfterChange  ");
        // console.log("employee", this.employee);
        // console.log("canva", this.myCanvas);
      }
    }
  }

  loadCharts() { 
    if (! this.range.value.start || ! this.range.value.end)
      return ;
    
    this.showAttendence = true ;
    // this._from = this.range.value.start  ;
    // this._to = this.range.value.end ;
    if (
      this.employee != null 
      // && this.myCanvas != null
      ) {
      this.getAttendanceDataForEmployee(
        this.range.value.start,
        this.range.value.end);
    }
  }


  getInfo (item: any): string {
    console.log("item is : ", item);
    
    return item.x + " : " + moment(item.y[0]).format("HH:mm") + " - " + moment(item.y[1]).format("HH:mm") ;
  }

  getAttendanceDataForEmployee(from: Date, to: Date) {
    this.attendenceService
      .loadCheckinsForUser(
        this.employee.userid,
        from, to
      )
      .pipe(catchError(() => of([])))
      .subscribe((data: AttendenceResponse) => {
        this.employeeAttendence = data._embedded.checkinouts;
        console.log("retrievedData: ", this.employeeAttendence);
        let chartId = "chart" + this.employee.badgenumber;
        this.myCanvas.nativeElement.setAttribute("id", chartId);
        this._synthese = this.chartService.initChartWithId(
          chartId,
          this.employeeAttendence,
          from,
          to
        );
        console.log('synthese : ', this._synthese);
        
      });
  }

  public showUnshowAttendence () {
    this.showAttendence = ! this.showAttendence ;
    if (this.showAttendence) {
//      this.chartService.updateChartWithId() ;
    }
  }
}
