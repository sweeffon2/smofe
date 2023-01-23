export interface User {
    name: string;
    id: number;
    departmentID: number;
}


export interface Checkin{
    idem: {
        id: number;
        time: Date;
    }
    sensorid: string;
}