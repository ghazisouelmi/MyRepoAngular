import { Injectable } from '@angular/core';
import { ICompte } from '../domain/icompte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  URL = 'http://localhost:57612/api/compte';
  // comptes: ICompte[] =
  // [
  //   {'numero' : 'F01', 'proprietaire' : 'Je suis Fake 1', 'solde' : 22200},
  //   {'numero' : 'F02', 'proprietaire' : 'Je suis Fake 2', 'solde' : 22200},
  //   {'numero' : 'F03', 'proprietaire' : 'Je suis Fake 3', 'solde' : 33300}
  // ];
  constructor(private _http: HttpClient) { }

  getAllComptes(): Observable<ICompte[]> {
    return this._http.get<ICompte[]>(this.URL);
  }
}
