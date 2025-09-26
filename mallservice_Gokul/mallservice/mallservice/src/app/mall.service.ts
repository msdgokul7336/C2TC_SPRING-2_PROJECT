import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MallService {
  API = "http://localhost:8080";

  public registerMall(mallData: any) {
    return this.http.post(`${this.API}/malls`, mallData);
  }

  public getMalls() {
    return this.http.get(`${this.API}/malls`);
  }

  public deleteMall(mallId: any) {
    return this.http.delete(`${this.API}/malls/${mallId}`);
  }

  public updateMall(mall: any) {
    return this.http.put(`${this.API}/malls/${mall.id}`, mall);
  }

  constructor(private http: HttpClient) { }
}
