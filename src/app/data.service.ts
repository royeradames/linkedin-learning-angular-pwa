import { Injectable } from '@angular/core';
import { Coffee } from "./logic/Coffee";
import { PlaceLocation } from "./logic/PlaceLocation";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public endpoint = "http://localhost:3000";

  get(coffeeId: string, callback: any) {
    this.http.get(`${this.endpoint}/coffees/${coffeeId}`)
      .subscribe((response: any) => {
        callback(response.json());
      })
  }

  getList(callback: any) {
    // const list = [
    //   new Coffee("Double Espresso", "Sunny Cafe", new PlaceLocation("123 Market St", "San Francisco")),
    //   new Coffee("Caramel Americano", "Starcoffee", new PlaceLocation("Gran Via 34", "Madrid"))
    // ];
    // callback(list);
    this.http.get(`${this.endpoint}/coffees`)
      .subscribe((response: any) => {
        console.log(response.json());
        callback(response.json());
      });
  }

  save(coffee: Coffee, callback: any) {
    if (coffee._id) {
      // It's an update
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee)
        .subscribe((response: any) => {
          callback(true);
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/coffees`, coffee)
        .subscribe((response: any) => {
          callback(true);
        });
    }
  }

}
