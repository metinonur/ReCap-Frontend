import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  apiUrl ="https://localhost:44367/api/"
  getCars(): Observable <CarResponseModel>{
    const newPath = this.apiUrl + 'cars/getcardetail';
    return this.httpClient.get<CarResponseModel>(newPath);
  }

}
