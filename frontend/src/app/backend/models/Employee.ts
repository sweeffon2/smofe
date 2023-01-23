export interface Employee {
    userid: number;
    badgenumber: number;
    name: string;
    gender: "M" | "F" | "";
    birthday: Date;
    title: string;
    defaultdeptid: number;
    site: string;
    hiredday: Date;
    until: Date;
}

export interface EmployeepageableResponse {
    _embedded: {
        userinfoes: Employee[];
    };
    _links: {
        self: {
            href: string;
        };
        first: {
            href: string;
        };
        next: {
            href: string;
        };
        last: {
            href: string;
        };        
    };
    page: {
        totalElements: number;
        totalPages: number;
        number: number;
        size: number;        
    }
}