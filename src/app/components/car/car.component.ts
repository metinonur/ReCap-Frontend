import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1={carName:"araba",brandId:1}
  cars=[this.car1]
  constructor() { }

  ngOnInit(): void {
  }

}
