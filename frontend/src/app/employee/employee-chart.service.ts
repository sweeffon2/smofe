import { Injectable } from '@angular/core';
import { CheckInOut } from 'app/backend/models/Attendance';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { Data } from './employee-attendence/datasets';
import { DataSet, WorkTime } from './employee-attendence/workTime';
import { TheConfig } from './utils/chartConfig';

@Injectable({
  providedIn: 'root'
})
export class EmployeeChartService {

  charts: Map<string, Chart> = new Map();

  constructor() {}

  public initChartWithId(id: string, attd: CheckInOut[], from: Date, to: Date): any {
    if (this.charts.get(id) != null) {
      this.charts.get(id).destroy() ;
    }
    var theConfig = new TheConfig ();
    var conf = theConfig.getConfig(attd, from, to) ;
    this.charts.set (id, new Chart (id, conf));
    console.log("synthese in service", conf.data);
    
    return conf.data.syntheses ;
  }

  public getChartWithId(id: string): Chart {
    return this.charts.get(id);
  }

}
