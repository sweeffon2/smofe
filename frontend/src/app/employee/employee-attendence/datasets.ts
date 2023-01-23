import { OnInit } from "@angular/core";
import { LinearScale } from "chart.js";
import * as moment from "moment";
import { DataSet } from "./workTime";


const labels = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
'jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getRandomInt(min:number, max:number) {
  return min + Math.floor(Math.random() * (max-min));
}

export class Data {

  colors = {
    backgroundColor: [
        'rgba(255, 99, 132, 0.65)',
        'rgba(54, 162, 235, 0.65)',
        'rgba(255, 206, 86, 0.65)',
        'rgba(75, 192, 192, 0.65)',
        'rgba(153, 102, 255, 0.65)',
        'rgba(255, 159, 64, 0.65)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
  }

    public getData(data: DataSet[]) {
        let times = data[0] ;
        let attendence = data[1] ;      
        return {
          //labels: labels,
          datasets: [
            {
              label: 'Horraire de travail',
              data: times.workTime.map((w) => {
                // console.log("The 0 date moment");
                
                // console.log(moment(0).toDate(), moment(0).valueOf);
                // console.log(moment(0).month(2).year(1987).toDate(), moment(0).day(5).valueOf);
                // console.log(moment(0).toDate(), moment(2).valueOf);
                console.log(moment('1971-02-01 23:59:59').toDate());
                console.log(w.from.toISOString());
                
                return {
                  x: w.from.toISOString(), 
                  y:[ 
                    moment(0).hour(w.from.getHours()).minute(w.from.getMinutes()).valueOf(), 
                    moment(0).hour(w.to.getHours()).minute(w.to.getMinutes()).valueOf()
                  ]
                };
              }),
              backgroundColor: this.colors.backgroundColor[2],
              borderWidth: 1,
              xAxisID: "bar-x-axis1",
            }       
          ]
        }

        ;
    }

    public getConfig(data: DataSet[]): any {
      console.log("starting get config ...");
      
        var config = config = {
            type: 'bar',
            data: this.getData(data),
            options: {
              scales: {
                x: {
                  stacked: true,
                  id: "bar-x-axis1",
                  barThickness: 30,
                  type: 'time',
                  time: {
                    unit: 'day'
                  }
                }, 
                xSeconde: {
                  display: false,
                  stacked: true,
                  // type: 'time',
                  // time: {
                  //     unit: 'day'
                  // },
                  id: "bar-x-axis2",
                  barThickness: 70,
                  // these are needed because the bar controller defaults set only the first x axis properties
                  type: 'category',
                  categoryPercentage: 0.8,
                  barPercentage: 0.9,
                  gridLines: {
                    offsetGridLines: true
                  },
                  offset: true
                },
                y: {
                  stacked: false,
                  // ticks: {
                  //   beginAtZero: true
                  // },
                  type: 'linear',
                  position: 'left',
                  // min: moment('2000-01-01 00:00:00').valueOf(),
                  // max: moment('2000-01-01 23:59:59').valueOf(),
                  beginAtZero: false,
                  min: moment(0).hour(5).valueOf(),
                  max: moment(0).hour(21).valueOf(),
                  ticks: {
                     stepSize: 3.6e+6,
                    
                    callback: value => {
                      let date = moment(value);
                      if(date.diff(moment(0), 'minutes') === 0) {
                        return null;
                      }

                      console.log('callback in y axis called');
                      
                      
                      return date.format('HH:mm');
                    }
                  }
                }
              },
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Chart.js Floating Bar Chart'
                }
              }
            }
          };

          console.log("ending get config ...");
  
        return config;
    }



    // data = {
    //     //labels: labels,
    //     datasets: [
    //       {
    //         label: 'Dataset 1',
    //         data: labels.map((l) => {
    //           return {x: l+l, y:[getRandomInt(-100, 0), getRandomInt(0,100)]};
    //         }),
    //         backgroundColor: this.colors.backgroundColor[2],
    //         borderWidth: 1,
    //         xAxisID: "bar-x-axis1",
    //       },
    //       // {
    //       //   label: 'Dataset 2',
    //       //   data: labels.map(() => {
    //       //     return [getRandomInt(-100, 0), getRandomInt(-0,100)];
    //       //   }),            
    //       //   backgroundColor: this.colors.backgroundColor[3],
    //       //   borderWidth: 1,
    //       //   xAxisID: "bar-x-axis2",
    //       // }          
    //     ]
    //   };
      

      

}