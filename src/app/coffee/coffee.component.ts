import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Coffee} from "../logic/Coffee";
import {GeolocationService} from "../geolocation.service";
import {TastingRating} from "../logic/TastingRating";

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffee!: Coffee;
  types = ["Espresso", "Ristretto", "Americano", "Cappuccino", "Frappe"];
  routingSubscription: any;

  constructor(private route: ActivatedRoute,
              private geolocation: GeolocationService) {
  }

  tastingRatingChanged(checked: boolean) {
    // if (checked) {
    //   this.coffee.tastingRating = new TastingRating();
    // } else {
    //   this.coffee.tastingRating = undefined;
    // }
    this.coffee.tastingRating = new TastingRating();
  }

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      });

    this.geolocation.requestLocation((location: typeof this.coffee.location) => {
      if (location) {
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    })

  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

  save() {
    console.log('Save')
  }

  cancel() {
    console.log('cancel');
  }
}
