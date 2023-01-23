export interface CheckInOut {
    idem: {
        userid: number;
        checktime: Date;
    };
    checktype: string;
    verifycode: number;
    sensorid: string;
    memoinfo: string;
    workCode: string;
    sn: "A8N5201160224";
    userExtFmt: number;
}

export interface AttendenceResponse {
    _embedded: {
        checkinouts: CheckInOut[];
    };
}

export interface Synthese {
    ouvrable: Date [];
    presencees: {x:string, y:number[]} [];
    retards: {x:string, y:number[]}[];
}

