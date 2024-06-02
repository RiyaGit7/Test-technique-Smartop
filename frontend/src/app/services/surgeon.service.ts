
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Surgeon } from '../models/surgeon.model';

@Injectable({
  providedIn: 'root'
})
export class SurgeonService {
  private apiUrl = 'http://localhost:5000/api/surgeons';

  constructor(private http: HttpClient) { }

  getSurgeons(): Observable<Surgeon[]> {
    return this.http.get<Surgeon[]>(this.apiUrl);
  }
}
