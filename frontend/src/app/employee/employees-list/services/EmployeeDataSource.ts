import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Employee, EmployeepageableResponse } from "app/backend/models/Employee";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { EmployeesService } from "app/backend/employees.service"

export class EmployeeDataSource extends DataSource<Employee> {

    private employeesSubject = new BehaviorSubject<Employee[]>([]);
    private loadingSubject = new BehaviorSubject<Boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count = 0 ;

    constructor (private employeeService: EmployeesService) {
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<readonly Employee[]> {        
        return this.employeesSubject.asObservable() ;
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.employeesSubject.complete() ; 
        this.loadingSubject.complete() ;
    }

    loadData (search: string = "",
        sort: string = "",
        page: number = 0,
        size: number = 5) {
            console.log('calling the loadEmployees from datasource service with parameters');
            this.loadingSubject.next(true);
        return this.employeeService.loadEmployees(search, sort, page, size)
            .pipe(
                catchError(() => of([])),
                finalize (() => this.loadingSubject.next(false)))
            .subscribe ( (data: EmployeepageableResponse) => {
                this.employeesSubject.next (data._embedded.userinfoes);
                this.count = data.page.totalElements;
                console.log(data);                
            }
            )
        ;
    }
}