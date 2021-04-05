import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerResponseModel } from 'src/app/models/customerResponseModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:Customer[]=[];
  customerResponseModel:CustomerResponseModel={
    data:this.customers,
    message:"",
    success:true,
  }
  apiUrl ="https://localhost:44367/api/customer/getall"
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.httpClient.get<CustomerResponseModel>(this.apiUrl).subscribe((response)=>{this.customers=response.data})
  }
}
