import { Component, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : Car[]=[];
  carResponseModel:CarResponseModel={
    data:this.cars,
    message:"",
    success:true,
  };
  apiUrl ="https://localhost:44367/api/cars/getcardetail"
  constructor(private httpClient:HttpClient, private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.httpClient.get<CarResponseModel>(this.apiUrl).subscribe((response)=>{
      this.cars=response.data
    })
  }
}
