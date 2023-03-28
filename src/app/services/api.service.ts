import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiServerURL = 'http://localhost:3000/';
  constructor(private httpService: HttpClient) {}

  doPostRequest(path: string, data: any) {
    return this.httpService.post(this.apiServerURL + path, data);
  }

  doGetRequest(path: string) {
    return this.httpService.get(this.apiServerURL + path);
  }
}
