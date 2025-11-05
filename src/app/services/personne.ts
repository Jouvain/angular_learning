import { Injectable } from '@angular/core';
import Personne from '../models/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { GenericService } from './generic';

@Injectable({
  providedIn: 'root'
})
export class PersonneService extends GenericService<Personne>{
  // private personnes: Personne[]
  // private url: string;
  constructor(http: HttpClient) {
    super(http, 'personnes')
    // utilisée uniquement hors-back
    // this.personnes = [
    //   { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
    //   { id: 2, nom: 'Dalton', prenom: 'Jack', age: 35 },
    //   { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 43 },
    // ]

    // this.url = environment.BACKEND_URL + "/personness";
  }



  // getPersonnes(): Observable<Personne[]> {
  //   // return this.personnes
  //   return this.http.get<Personne[]>(this.url);
  // }

  // getPersonneById(id: number): Observable<Personne> {
  //   // return this.personnes.find(p => p.id == id);
  //   return this.http.get<Personne>(`${this.url}/${id}`);
  // }

  // save(p: Personne): Observable<Personne> {
  //   // this.personnes.push(p);
  //   console.log(p);
  //   return this.http.post<Personne>(this.url, p);
  // }
  
  // remove(ind: number): Observable<void> {
  //   // this.personnes.splice(ind, 1)
  //   return this.http.delete<void>(`${this.url}/${ind}`);
  // }

  // edit(p: Personne, id:number): Observable<Personne> {
  //   return this.http.put<Personne>(`${this.url}/${id}`, p);
  // }
}

/*
Toutes les méthodes http renvoie un observable, donc s'il n'est pas "observé" via un suscribe, il ne sera jamais activé, la requête sera abandonnée
*/