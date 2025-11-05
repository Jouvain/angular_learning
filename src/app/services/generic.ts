import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

export abstract class GenericService<T> {
    constructor(protected http: HttpClient, protected path: string) { }

    findAll(): Observable<T[]> {
        return this.http.get<T[]>(`${environment.BACKEND_URL}/${this.path}`);
    }

    findById(id: number): Observable<T> {
        return this.http.get<T>(`${environment.BACKEND_URL}/${this.path}/${id}`)
    }

    save(p: T): Observable<T> {
        return this.http.post<T>(`${environment.BACKEND_URL}/${this.path}`, p);
    }
    update(id: number, p: T): Observable<T> {
        return this.http.put<T>(`${environment.BACKEND_URL}/${this.path}/${id}`, p);
    }

    remove(id: number): Observable<void> {
        return this.http.delete<void>(`${environment.BACKEND_URL}/${this.path}/${id}`)
    }
}