import * as moment from "moment";

import "chartjs-adapter-moment";
import { CheckInOut, Synthese } from "app/backend/models/Attendance";

export const colors = {
  backgroundColor: [
    "rgba(255, 99, 132, 0.35)",
    "rgba(54, 162, 235, 0.65)",
    "rgba(255, 206, 86, 0.65)",
    "rgba(75, 192, 192, 0.65)",
    "rgba(153, 102, 255, 0.8)",
    "rgba(255, 159, 64, 0.65)",
    "rgba(255, 20, 20, 1.00)",
  ],
  borderColor: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ],
};

export class TheConfig {

  public getConfig(attd: CheckInOut[], from: Date, to: Date): any {
    console.log("I am here in getConfig () ");

    var myConfig = {
      type: "bar",
      // data: this.getData(),
      data: this.useData(attd, from, to),
      options: {
        plugins: {
          title: {
            display: true,
            text: "Chart.js Bar Chart - Stacked",
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },

          y: {
            stacked: false,
            min: moment(0).set("hours", 6).valueOf(),
            max: moment(0).set("hours", 20).valueOf(),
            reverse: true,
            ticks: {
              stepSize: moment(0).add(30, "minutes").diff(moment(0)),
              callback: (value) => {
                return moment(value).format("HH:mm");
              },
            },
          },
        },
      },
    };

    return myConfig;
  }

 
  public useData(attd: CheckInOut[], from: Date, to: Date) {
    let dateFormat = "ddd DD-MM-YY";
    var dt: Map<string, number[]> = new Map();
    let oneDayLength:number  =  moment(0).add(1, "days").diff(moment(0));
    let twoMinutesLength:number =  moment(0).add(2, "minutes").diff(moment(0));
    var synthese: Synthese = {ouvrable: [], presencees: [], retards: []}

    // console.log("ATDT", attendences);
    
    var attendences = attd ;

    attendences.forEach((v) => {
        let key = moment(v.idem.checktime).format(dateFormat);
        if (!dt.has(key)) {
          dt.set(key, []);
        }
        dt.get(key)!.push(moment(v.idem.checktime).valueOf());
      });

    // trasforming the map into an array of values

    var attendancedays = Array.from(dt.entries()).map((entry) => {
      var value = {
        x: entry[0],
        y: [
          entry[1].reduce((v1, v2) => (v1<v2) ? v1 : v2) % oneDayLength,
          entry[1].reduce((v1, v2) => (v1<v2) ? v2 : v1) % oneDayLength,
        ],
      };
      if (value.y[1] - value.y[0] > 1000*60*(8*60+30) )  {
        synthese.presencees.push(value) ;
      } else {
        synthese.retards.push(value);
      }      
      return value;
    });

    var allChecks = attendences.map((v) => {
        var value = {
          x: moment(v.idem.checktime).format(dateFormat),
          y: moment(v.idem.checktime).valueOf() % oneDayLength
        };
        return value;
      });

    var allLabels = Array.from ( { length: moment(to).add(1, "days").diff(moment(from), "days") } )
     .map((v, i) => moment(from).add (i, "days").format(dateFormat)); 

    var allWeekends = allLabels.filter((v) => moment(v, dateFormat).weekday() > 4)
    .map((v) => { 
      return { 
        x: v, 
        y: [
          moment(0).set("hours", 6).valueOf() ,
          moment(0).set("hours", 20).valueOf(),
        ]}});
    
    synthese.ouvrable = allLabels
    .map((v) => moment(v, dateFormat))
    .filter ((v)=>v.weekday()<5)
    .map ((v)=> v.toDate()) ;

    console.log("here in get data ", allLabels);

    var data = {
      labels: allLabels,
      datasets: [
        {
          label: "Présence",
          data: attendancedays,
          backgroundColor: colors.backgroundColor[1],
        },
        {
          label: "Weekends",
          data: allWeekends,
          backgroundColor: colors.backgroundColor[0],
        },      
        {
          type: 'scatter',
          label: "all checks",
          data: allChecks,
          backgroundColor: colors.backgroundColor[6],
        },    
        {
          type: 'line',
          label: "start/end",
          data: [
            {x:moment(from).format(dateFormat), y:moment(0).set("hours",8).valueOf()},
            {x:moment(to).format(dateFormat), y:moment(0).set("hours",8).valueOf()},
            {x:moment(to).format(dateFormat), y:moment(0).set("hours",16).set("minutes",30).valueOf()},
            {x:moment(from).format(dateFormat), y:moment(0).set("hours",16).set("minutes",30).valueOf()},
          ],
          backgroundColor: colors.backgroundColor[2],
        },   
      ],
      syntheses: synthese,
    };
    return data;
  }

}