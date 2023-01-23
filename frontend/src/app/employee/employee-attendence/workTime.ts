import * as moment from "moment";

export class WorkTime {
    constructor (private _from: Date, private _to: Date) {}

    get from () {
        return this._from ;
    }

    get to () {
        return this._to ;
    }
}

export class AttendenceDay {
    tikking: Date[] ;

    getMin(): Date {
        return this.tikking.reduce(
            (accumulator, currentValue) => {
            return (accumulator < currentValue ? accumulator : currentValue);
          } )   ;
    }

    getMax(): Date {
        return this.tikking.reduce(
            (accumulator, currentValue) => {
            return (accumulator < currentValue ?  currentValue : accumulator);
          } )   ;
    }

    getMinForDrawing(): Date {
        return moment(this.getMin()).subtract(5, 'minutes').toDate()  ;
    }

    getMaxForDrawing(): Date {
        return moment(this.getMin()).add(5, 'minutes').toDate()  ;
    }
}


export class DataSet {

    constructor (private _workTime: WorkTime[]){}

    get workTime () {
        return this._workTime ;
    }

    public addDayWork (day: WorkTime) {
        this._workTime.concat(day) ;
    }
}
